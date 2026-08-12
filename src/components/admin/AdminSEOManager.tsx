import { useState, useEffect } from "react";
import { 
  getAllPageSEO, 
  getSEOForPage, 
  saveSEOForPage, 
  resetSEOToDefaults,
  getCustomHeaderScripts,
  saveCustomHeaderScripts,
  DEFAULT_SEO_CONFIG,
  type PageSEO 
} from "@/lib/seo-manager";
import { 
  getAllTreatmentImageOverrides, 
  saveTreatmentImageOverride, 
  removeTreatmentImageOverride, 
  resetTreatmentImageOverrides 
} from "@/lib/treatment-image-manager";
import { Globe, Lock, Save, RefreshCw, Download, Upload, CheckCircle, Search, Eye, AlertCircle, Code, FileCode, Image, Trash2, UploadCloud, Layers } from "lucide-react";

const TREATMENT_CATEGORIES = [
  {
    category: "Skin & HydraFacial",
    route: "/services/skin",
    treatments: ["HydraFacial", "Chemical Peels", "Mesotherapy", "Microneedling", "Skin Boosters", "Carbon Laser Facial", "PRP Facial Rejuvenation"]
  },
  {
    category: "Cosmetic Injectables",
    route: "/services/injectables",
    treatments: ["Botox", "Dermal Fillers", "Profhilo", "Lip Enhancement", "Sculptra", "Rejuran / PN Therapy", "Peptide Pens"]
  },
  {
    category: "Laser & Hair Removal",
    route: "/services/laser",
    treatments: ["Laser Hair Removal (Full Body)", "Pigmentation Laser", "Vascular Laser", "Laser Tattoo Removal", "IPL Photofacial", "Laser Skin Resurfacing", "Vaginal Tightening Laser"]
  },
  {
    category: "Anti-Aging & Lifting",
    route: "/services/lifting",
    treatments: ["Morpheus8", "Ultherapy", "PDO Threads", "Fotona 4D", "HIFU Tightening", "Endolift"]
  },
  {
    category: "Aesthetic Dentistry",
    route: "/services/dental/aesthetic-dentistry",
    treatments: ["Porcelain Veneers", "Teeth Whitening", "Hollywood Smile", "Snap-On Smile"]
  },
  {
    category: "Clinical Dentistry",
    route: "/services/dental/clinical-dentistry",
    treatments: ["Clinical Examination & X-Rays", "Scaling & Polishing", "Dental Implants", "Orthodontic Braces / Invisalign", "Crowns & Bridges", "Root Canal Therapy", "Pediatric Dentistry"]
  },
  {
    category: "Wellness & Longevity",
    route: "/services/wellness",
    treatments: ["Glow IV Drip", "Vitamin C IV Drip", "NAD+ Therapy", "Immune Boost IV", "Hydration IV Drip", "Beauty Drip", "Anti-Aging IV Drip"]
  }
];

function compressImage(file: File, maxWidth = 800, maxHeight = 600, quality = 0.75): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (!dataUrl) {
        resolve("");
        return;
      }
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve(dataUrl);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", quality);
          resolve(compressed || dataUrl);
        } catch (err) {
          console.warn("Canvas compression fallback to raw dataUrl", err);
          resolve(dataUrl);
        }
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    };
    reader.onerror = () => resolve("");
    reader.readAsDataURL(file);
  });
}

export function AdminSEOManager() {
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  const [selectedPath, setSelectedPath] = useState("/");
  const [seoForm, setSeoForm] = useState<PageSEO>(DEFAULT_SEO_CONFIG["/"]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [activeTab, setActiveTab] = useState<"seo" | "photos" | "scripts">("seo");
  const [treatmentOverrides, setTreatmentOverrides] = useState<Record<string, string>>({});
  const [selectedCategory, setSelectedCategory] = useState("Skin & HydraFacial");
  const [uploadingTreatment, setUploadingTreatment] = useState<string | null>(null);
  const [photoSavedMessage, setPhotoSavedMessage] = useState<string | null>(null);

  const [customScripts, setCustomScripts] = useState("");
  const [scriptsSavedSuccess, setScriptsSavedSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      try {
        const storedAuth = sessionStorage.getItem("alnemah_admin_authed");
        if (storedAuth === "true") {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setSeoForm(getSEOForPage(selectedPath));
      setSavedSuccess(false);
      setCustomScripts(getCustomHeaderScripts());
      setTreatmentOverrides(getAllTreatmentImageOverrides());
    }
  }, [selectedPath, isAuthenticated]);

  const handleUploadPhoto = async (treatmentName: string, file: File) => {
    setUploadingTreatment(treatmentName);
    try {
      const dataUrl = await compressImage(file);
      if (dataUrl) {
        saveTreatmentImageOverride(treatmentName, dataUrl);
        setTreatmentOverrides(getAllTreatmentImageOverrides());
        setPhotoSavedMessage(`Custom photo updated for "${treatmentName}"!`);
        setTimeout(() => setPhotoSavedMessage(null), 4000);
      } else {
        alert("Failed to read photo file.");
      }
    } catch (e) {
      console.error("Failed to compress and save photo", e);
      alert("Could not process photo. Please try a different image file.");
    } finally {
      setUploadingTreatment(null);
    }
  };

  const handleRemovePhoto = (treatmentName: string) => {
    if (confirm(`Remove custom photo for ${treatmentName} and revert to default?`)) {
      removeTreatmentImageOverride(treatmentName);
      setTreatmentOverrides(getAllTreatmentImageOverrides());
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "alnemah2026" || passcode.trim() === "admin123") {
      setIsAuthenticated(true);
      setAuthError(false);
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("alnemah_admin_authed", "true");
        } catch (e) {}
      }
    } else {
      setAuthError(true);
    }
  };

  const handlePathChange = (path: string) => {
    setSelectedPath(path);
    setSeoForm(getSEOForPage(path));
    setSavedSuccess(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSEOForPage(selectedPath, seoForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleSaveScripts = () => {
    saveCustomHeaderScripts(customScripts);
    setScriptsSavedSuccess(true);
    setTimeout(() => setScriptsSavedSuccess(false), 3000);
  };

  const handleResetAll = () => {
    if (confirm("Are you sure you want to reset ALL pages back to original default SEO values?")) {
      resetSEOToDefaults();
      setSeoForm(getSEOForPage(selectedPath));
      alert("All SEO values have been reset to factory defaults!");
    }
  };

  const handleExportJSON = () => {
    const data = JSON.stringify(getAllPageSEO(), null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `alnemah-seo-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedConfig = JSON.parse(event.target?.result as string);
        for (const [path, config] of Object.entries(importedConfig)) {
          saveSEOForPage(path, config as PageSEO);
        }
        setSeoForm(getSEOForPage(selectedPath));
        alert("SEO Backup JSON imported and restored successfully!");
      } catch (err) {
        alert("Failed to parse JSON file. Please ensure it is a valid backup JSON.");
      }
    };
    reader.readAsText(file);
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <p className="eyebrow mb-2">Al Nemah Medical Center</p>
          <h2 className="font-display text-2xl">Loading Admin Panel...</h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-28 pb-16">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#974d08]/10 text-[#974d08]">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">Admin Portal</h1>
            <p className="mt-2 text-xs text-muted-foreground">Enter passcode to manage On-Page SEO, Meta Tags & Treatment Card Photos</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[#974d08] focus:outline-none"
              />
              {authError && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Invalid passcode. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#974d08] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
            >
              Unlock Admin Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  const currentCategoryObj = TREATMENT_CATEGORIES.find((c) => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background pt-36 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#974d08] mb-1">
            <Globe className="w-4 h-4" /> Al Nemah On-Page SEO & Content Engine
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Website Control Center
          </h1>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-border rounded-lg bg-card hover:bg-accent/20 transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Backup JSON
          </button>
          <label className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-border rounded-lg bg-card hover:bg-accent/20 cursor-pointer transition-colors">
            <Upload className="w-3.5 h-3.5" /> Restore JSON
            <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
          </label>
          <button
            onClick={handleResetAll}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-red-600 border border-red-200 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Defaults
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-border mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("seo")}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === "seo"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Globe className="w-4 h-4" /> On-Page SEO & Meta Tags
        </button>

        <button
          onClick={() => setActiveTab("photos")}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === "photos"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Image className="w-4 h-4" /> Treatment Card Photos ({treatmentOverrides && typeof treatmentOverrides === "object" ? Object.keys(treatmentOverrides).length : 0} Custom)
        </button>

        <button
          onClick={() => setActiveTab("scripts")}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === "scripts"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="w-4 h-4" /> Header Code & Analytics
        </button>
      </div>

      {/* TAB 1: SEO MANAGER */}
      {activeTab === "seo" && (
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Select Page to Edit</h2>
            <div className="space-y-1.5">
              {Object.entries(DEFAULT_SEO_CONFIG).map(([path, cfg]) => (
                <button
                  key={path}
                  onClick={() => handlePathChange(path)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    selectedPath === path
                      ? "border-[#974d08] bg-[#974d08]/10 text-[#974d08] font-bold shadow-sm"
                      : "border-border bg-card text-foreground hover:bg-accent/20"
                  }`}
                >
                  <div className="font-semibold text-sm">{cfg.pageName}</div>
                  <div className="text-[11px] opacity-75 font-mono">{path}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <form onSubmit={handleSave} className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <span className="text-xs font-bold text-[#974d08] uppercase tracking-wider">Editing SEO Config</span>
                  <h3 className="font-display text-xl font-bold">{seoForm.pageName}</h3>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-[#974d08] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-90 transition-all cursor-pointer"
                >
                  <Save className="w-4 h-4" /> Save Page SEO
                </button>
              </div>

              {savedSuccess && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-xs font-semibold text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> On-Page SEO updated successfully! Changes applied immediately.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Page Title (SERP Title)</label>
                  <input
                    type="text"
                    value={seoForm.title}
                    onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Canonical URL</label>
                  <input
                    type="text"
                    value={seoForm.canonicalUrl}
                    onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Meta Description</label>
                <textarea
                  rows={3}
                  value={seoForm.description}
                  onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Target Keywords (Comma Separated)</label>
                <input
                  type="text"
                  value={seoForm.keywords}
                  onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Social OpenGraph Title</label>
                  <input
                    type="text"
                    value={seoForm.ogTitle}
                    onChange={(e) => setSeoForm({ ...seoForm, ogTitle: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Social Preview Image URL</label>
                  <input
                    type="text"
                    value={seoForm.ogImage}
                    onChange={(e) => setSeoForm({ ...seoForm, ogImage: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Robots Directive</label>
                <select
                  value={seoForm.robots}
                  onChange={(e) => setSeoForm({ ...seoForm, robots: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-xs focus:border-[#974d08] focus:outline-none"
                >
                  <option value="index, follow">index, follow (Public Search Indexing)</option>
                  <option value="noindex, follow">noindex, follow (Do not index, follow links)</option>
                  <option value="noindex, nofollow">noindex, nofollow (Private Admin / Hidden)</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TAB 2: TREATMENT PHOTOS */}
      {activeTab === "photos" && (
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#974d08] mb-1">
                  <Image className="w-4 h-4" /> Treatment Card Photos Manager
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Upload Custom Photos for Treatment Cards</h2>
                <p className="text-xs text-muted-foreground mt-1">Select a category and upload custom photos for individual treatment cards across all service pages.</p>
              </div>
              
              {treatmentOverrides && typeof treatmentOverrides === "object" && Object.keys(treatmentOverrides).length > 0 && (
                <button
                  onClick={() => {
                    if (confirm("Reset ALL custom uploaded treatment photos back to default?")) {
                      resetTreatmentImageOverrides();
                      setTreatmentOverrides({});
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Reset All Custom Photos ({Object.keys(treatmentOverrides).length})
                </button>
              )}
            </div>

            {photoSavedMessage && (
              <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-xs font-semibold text-green-700 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> {photoSavedMessage}
              </div>
            )}

            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap pt-4">
              {TREATMENT_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat.category
                      ? "bg-[#974d08] text-white shadow-sm"
                      : "bg-muted hover:bg-muted/80 text-foreground/80"
                  }`}
                >
                  {cat.category} ({cat.treatments.length})
                </button>
              ))}
            </div>
          </div>

          {/* Treatments Grid for Selected Category */}
          {currentCategoryObj && (
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-foreground">
                Treatments in {currentCategoryObj.category}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentCategoryObj.treatments.map((tName) => {
                  const hasCustom = !!(treatmentOverrides && treatmentOverrides[tName]);
                  const currentImg = treatmentOverrides ? treatmentOverrides[tName] : null;
                  const inputId = `file-input-${tName.replace(/[^a-zA-Z0-9]/g, '-')}`;

                  return (
                    <div key={tName} className="rounded-2xl border border-border bg-card p-5 space-y-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-display text-lg font-semibold text-foreground">{tName}</h4>
                          {hasCustom ? (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-green-100 text-green-700">Custom Photo</span>
                          ) : (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Default</span>
                          )}
                        </div>

                        {/* Image Preview Box */}
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border relative group">
                          {currentImg ? (
                            <img src={currentImg} alt={tName} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                              <Image className="w-8 h-8 opacity-40 mb-2" />
                              <span className="text-xs">No custom photo uploaded</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          type="button"
                          disabled={uploadingTreatment === tName}
                          onClick={() => {
                            const inputEl = document.getElementById(inputId);
                            if (inputEl) inputEl.click();
                          }}
                          className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#974d08] text-white hover:opacity-90 transition-all ${
                            uploadingTreatment === tName ? "opacity-60 cursor-wait" : "cursor-pointer"
                          }`}
                        >
                          {uploadingTreatment === tName ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving...
                            </>
                          ) : (
                            <>
                              <UploadCloud className="w-3.5 h-3.5" /> {hasCustom ? "Change Photo" : "Upload Photo"}
                            </>
                          )}
                        </button>

                        <input
                          id={inputId}
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleUploadPhoto(tName, file);
                            e.target.value = "";
                          }}
                          className="hidden"
                        />

                        {hasCustom && (
                          <button
                            type="button"
                            onClick={() => handleRemovePhoto(tName)}
                            className="p-2 text-red-600 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 transition-colors cursor-pointer"
                            title="Remove custom photo"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: HEADER SCRIPTS */}
      {activeTab === "scripts" && (
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6 shadow-sm max-w-4xl">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#974d08] mb-1">
                <Code className="w-4 h-4" /> Header Code Injector
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground">Insert Custom Scripts to Website Header</h2>
              <p className="text-xs text-muted-foreground mt-1">Paste Google Analytics (GA4), Google Tag Manager (GTM), Meta Pixel, or custom &lt;script&gt; and &lt;style&gt; tags to inject into the &lt;head&gt; of all pages.</p>
            </div>

            <button
              onClick={handleSaveScripts}
              className="flex items-center gap-2 rounded-xl bg-[#974d08] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-90 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Header Scripts
            </button>
          </div>

          {scriptsSavedSuccess && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-xs font-semibold text-green-700 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Header scripts saved and applied successfully across all pages!
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Custom &lt;head&gt; HTML / JS Code
            </label>
            <textarea
              rows={12}
              value={customScripts}
              onChange={(e) => setCustomScripts(e.target.value)}
              placeholder="<!-- Paste your Google Analytics or Meta Pixel script here -->&#10;<script>&#10;  console.log('Al Nemah Analytics Loaded');&#10;</script>"
              className="w-full rounded-xl border border-border bg-background p-4 text-xs font-mono focus:border-[#974d08] focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      )}
    </div>
  );
}
