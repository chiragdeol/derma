import { createFileRoute } from '@tanstack/react-router'
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

export const Route = createFileRoute("/admin/seo")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Al Nemah Medical Center" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminSEOManager,
});

const PAGES_LIST = [
  { path: "/", label: "Home Page (/)" },
  { path: "/about", label: "About Us (/about)" },
  { path: "/services", label: "Services Index (/services)" },
  { path: "/services/skin", label: "Skin & HydraFacial (/services/skin)" },
  { path: "/services/injectables", label: "Cosmetic Injectables (/services/injectables)" },
  { path: "/services/laser", label: "Laser & Hair Removal (/services/laser)" },
  { path: "/services/lifting", label: "Anti-Aging & Lifting (/services/lifting)" },
  { path: "/services/dental/aesthetic-dentistry", label: "Aesthetic Dentistry (/services/dental/aesthetic-dentistry)" },
  { path: "/services/dental/clinical-dentistry", label: "Clinical Dentistry (/services/dental/clinical-dentistry)" },
  { path: "/services/wellness", label: "Wellness & Longevity (/services/wellness)" },
  { path: "/contact", label: "Contact Us (/contact)" },
];

const TREATMENT_CATEGORIES = [
  {
    category: "Skin & HydraFacial",
    route: "/services/skin",
    treatments: ["HydraFacial", "Chemical Peels", "Mesotherapy", "Microneedling", "Skin Boosters", "Carbon Laser Peel", "PRP Facial"]
  },
  {
    category: "Cosmetic Injectables",
    route: "/services/injectables",
    treatments: ["Botox", "Dermal Fillers", "Profhilo", "Lip Enhancement", "Sculptra", "Rejuran / PN Therapy", "Peptide Pens"]
  },
  {
    category: "Laser & Hair Removal",
    route: "/services/laser",
    treatments: ["Laser Hair Removal", "Pigmentation Laser Treatment", "Vascular Laser Therapy", "Laser Tattoo Removal", "IPL Photofacial", "Laser Skin Resurfacing", "Vaginal Tightening Laser"]
  },
  {
    category: "Anti-Aging & Lifting",
    route: "/services/lifting",
    treatments: ["Morpheus8 RF Microneedling", "Ultherapy", "PDO Thread Lift", "Fotona 4D Laser Lifting", "HIFU (High-Intensity Focused Ultrasound)", "Endolift Laser"]
  },
  {
    category: "Aesthetic Dentistry",
    route: "/services/dental/aesthetic-dentistry",
    treatments: ["Porcelain Veneers", "Laser Teeth Whitening", "Composite Restoration", "Zirconia Crowns & Bridges", "Invisalign Clear Aligners", "Snap On Smile"]
  },
  {
    category: "Clinical Dentistry",
    route: "/services/dental/clinical-dentistry",
    treatments: ["Clinical Exam & X-rays", "Scaling & Polishing", "Fluoride Treatment", "Composite Fillings", "Root Canal Treatment (RCT)", "Dental Crowns & Bridges", "Dental Extractions", "Dental Implants", "Orthodontic Braces", "Dentures", "Pedodontics (Children's Dentistry)", "Night Guard / Splint"]
  },
  {
    category: "Wellness & Longevity",
    route: "/services/wellness",
    treatments: ["Glow IV Drip", "Vitamin C IV Drip", "NAD+ Therapy", "Immune Boost IV", "Hydration IV Drip", "Beauty Drip", "Anti-Aging IV Drip"]
  }
];

function AdminSEOManager() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  const [selectedPath, setSelectedPath] = useState("/");
  const [seoForm, setSeoForm] = useState<PageSEO>(DEFAULT_SEO_CONFIG["/"]);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  const [activeTab, setActiveTab] = useState<"seo" | "photos" | "scripts">("seo");
  const [treatmentOverrides, setTreatmentOverrides] = useState<Record<string, string>>({});
  const [selectedCategory, setSelectedCategory] = useState("Skin & HydraFacial");

  useEffect(() => {
    // Check if passcode previously entered
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

  const handleUploadPhoto = (treatmentName: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      saveTreatmentImageOverride(treatmentName, dataUrl);
      setTreatmentOverrides(getAllTreatmentImageOverrides());
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (treatmentName: string) => {
    if (confirm(`Remove custom photo for ${treatmentName} and revert to default?`)) {
      removeTreatmentImageOverride(treatmentName);
      setTreatmentOverrides(getAllTreatmentImageOverrides());
    }
  };

  const handleSaveScripts = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomHeaderScripts(customScripts);
    setScriptsSavedSuccess(true);
    setTimeout(() => setScriptsSavedSuccess(false), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "alnemah2026" || passcode === "admin123") {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem("alnemah_admin_authed", "true");
        } catch (e) {}
      }
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSEOForPage(selectedPath, seoForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleResetAll = () => {
    if (confirm("Are you sure you want to reset all SEO settings back to defaults?")) {
      resetSEOToDefaults();
      setSeoForm(getSEOForPage(selectedPath));
      alert("All page SEO configurations reset to factory defaults.");
    }
  };

  const handleExportJSON = () => {
    const allConfig = getAllPageSEO();
    const blob = new Blob([JSON.stringify(allConfig, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `alnemah-seo-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        localStorage.setItem("alnemah_seo_config_v1", JSON.stringify(parsed));
        setSeoForm(getSEOForPage(selectedPath));
        alert("SEO backup configuration successfully imported!");
      } catch (err) {
        alert("Invalid JSON backup file.");
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 pt-36 pb-20">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-xl text-center">
          <div className="w-14 h-14 bg-[#974d08]/10 text-[#974d08] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="font-display text-2xl font-semibold text-foreground mb-2">SEO Admin Access</h1>
          <p className="text-xs text-muted-foreground mb-6">Enter clinic management passcode to manage page titles, meta descriptions & search keywords.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-xl bg-background text-sm font-mono text-center outline-none focus:border-[#974d08]"
            />
            {authError && (
              <p className="text-xs text-red-600 font-medium">Incorrect passcode. Please try again.</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#974d08] text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              Unlock SEO Dashboard
            </button>
          </form>
          <p className="text-[10px] text-muted-foreground mt-6">Hint: Default passcode is <code className="bg-muted px-1.5 py-0.5 rounded font-mono">alnemah2026</code></p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-36 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-border">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#974d08] uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4" /> On-Page SEO Engine
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground font-semibold">SEO & SERP Management</h1>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-border rounded-lg bg-card hover:bg-muted transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Backup JSON
          </button>
          <label className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border border-border rounded-lg bg-card hover:bg-muted cursor-pointer transition-colors">
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
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap ${
            activeTab === "seo"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Globe className="w-4 h-4" /> On-Page SEO & Meta Tags
        </button>

        <button
          onClick={() => setActiveTab("photos")}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap ${
            activeTab === "photos"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Image className="w-4 h-4" /> Treatment Card Photos ({Object.keys(treatmentOverrides).length} Custom)
        </button>

        <button
          onClick={() => setActiveTab("scripts")}
          className={`flex items-center gap-2 px-6 py-3 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap ${
            activeTab === "scripts"
              ? "border-[#974d08] text-[#974d08] font-bold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="w-4 h-4" /> Header Code & Analytics
        </button>
      </div>

      {/* TAB 1: SEO META TAGS */}
      {activeTab === "seo" && (
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar: Page Picker */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-2 mb-3">Select Page to Edit</h3>
            <div className="space-y-1 bg-card border border-border rounded-2xl p-3 shadow-sm">
              {PAGES_LIST.map((page) => (
                <button
                  key={page.path}
                  onClick={() => setSelectedPath(page.path)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                    selectedPath === page.path
                      ? "bg-[#974d08] text-white font-semibold shadow-sm"
                      : "hover:bg-muted text-foreground/90"
                  }`}
                >
                  <span>{page.label}</span>
                  {selectedPath === page.path && <CheckCircle className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Main Panel: Form & Live Google Preview */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Google Search Preview Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground">
                  <Search className="w-4 h-4 text-[#974d08]" /> Live Google SERP Snippet Preview
                </div>
                <div className="flex bg-muted p-1 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setPreviewDevice("desktop")}
                    className={`px-3 py-1 rounded-md transition-all ${previewDevice === "desktop" ? "bg-background shadow-xs text-foreground font-semibold" : "text-muted-foreground"}`}
                  >
                    Desktop
                  </button>
                  <button
                    onClick={() => setPreviewDevice("mobile")}
                    className={`px-3 py-1 rounded-md transition-all ${previewDevice === "mobile" ? "bg-background shadow-xs text-foreground font-semibold" : "text-muted-foreground"}`}
                  >
                    Mobile
                  </button>
                </div>
              </div>

              {/* Google Search Snippet UI Box */}
              <div className={`border border-border/80 rounded-xl p-5 bg-white text-left font-sans ${previewDevice === "mobile" ? "max-w-sm mx-auto" : "w-full"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-[#974d08] text-white text-[9px] flex items-center justify-center font-bold">AN</div>
                  <div className="text-xs text-gray-700 truncate">
                    <span className="font-medium text-gray-900">Al Nemah Clinic</span>
                    <span className="text-gray-400 mx-1">•</span>
                    <span className="text-gray-500">{seoForm.canonicalUrl}</span>
                  </div>
                </div>
                <h4 className="text-lg text-[#1a0dab] hover:underline cursor-pointer font-normal leading-snug line-clamp-1">
                  {seoForm.title || "Page Title Placeholder"}
                </h4>
                <p className="text-xs text-[#4d5156] leading-relaxed mt-1 line-clamp-2">
                  {seoForm.description || "Page meta description will be displayed here in Google search results."}
                </p>
              </div>
            </div>

            {/* SEO Metadata Form */}
            <form onSubmit={handleSave} className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <h3 className="font-display text-xl font-semibold text-foreground">Edit Metadata for {selectedPath}</h3>
                {savedSuccess && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> Saved & Applied Live!
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground">Meta Title Tag</label>
                  <span className={`text-[11px] font-mono font-medium ${seoForm.title.length > 60 ? "text-amber-600 font-bold" : "text-muted-foreground"}`}>
                    {seoForm.title.length} / 60 chars
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={seoForm.title}
                  onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm font-medium outline-none focus:border-[#974d08]"
                />
                <p className="text-[11px] text-muted-foreground mt-1">Recommended length: 50-60 characters including main keyword and location (Sharjah).</p>
              </div>

              {/* Description */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground">Meta Description</label>
                  <span className={`text-[11px] font-mono font-medium ${seoForm.description.length > 160 ? "text-amber-600 font-bold" : "text-muted-foreground"}`}>
                    {seoForm.description.length} / 160 chars
                  </span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={seoForm.description}
                  onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm font-medium outline-none focus:border-[#974d08]"
                />
                <p className="text-[11px] text-muted-foreground mt-1">Recommended length: 140-160 characters. Compelling call-to-action for searchers.</p>
              </div>

              {/* Target Keywords */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Target Keywords (Comma Separated)</label>
                <input
                  type="text"
                  value={seoForm.keywords}
                  onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm outline-none focus:border-[#974d08]"
                />
                <p className="text-[11px] text-muted-foreground mt-1">Example: <code className="bg-muted px-1.5 py-0.5 rounded">hydrafacial sharjah, skin care, best dermatologist</code></p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* OpenGraph Title */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Open Graph Title</label>
                  <input
                    type="text"
                    value={seoForm.ogTitle}
                    onChange={(e) => setSeoForm({ ...seoForm, ogTitle: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm outline-none focus:border-[#974d08]"
                  />
                </div>

                {/* Canonical URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Canonical Link URL</label>
                  <input
                    type="text"
                    value={seoForm.canonicalUrl}
                    onChange={(e) => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                    className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm outline-none focus:border-[#974d08]"
                  />
                </div>
              </div>

              {/* OG Image */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Open Graph Image Link</label>
                <input
                  type="text"
                  value={seoForm.ogImage}
                  onChange={(e) => setSeoForm({ ...seoForm, ogImage: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm outline-none focus:border-[#974d08]"
                />
              </div>

              {/* Robots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">Robots Meta Directive</label>
                <select
                  value={seoForm.robots}
                  onChange={(e) => setSeoForm({ ...seoForm, robots: e.target.value })}
                  className="w-full px-4 py-2.5 border border-border rounded-xl bg-background text-sm outline-none focus:border-[#974d08]"
                >
                  <option value="index, follow">index, follow (Allow Search Engines to Index)</option>
                  <option value="noindex, nofollow">noindex, nofollow (Hide from Search Engines)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-border flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#974d08] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 shadow-md transition-opacity"
                >
                  <Save className="w-4 h-4" /> Save & Update Live Meta Tags
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TAB 2: TREATMENT PHOTOS MANAGER */}
      {activeTab === "photos" && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#974d08] mb-1">
                  <Image className="w-4 h-4" /> Treatment Card Photos Manager
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Upload Custom Photos for Treatment Cards</h2>
                <p className="text-xs text-muted-foreground mt-1">Select a category and upload custom photos for individual treatment cards across all service pages.</p>
              </div>
              
              {Object.keys(treatmentOverrides).length > 0 && (
                <button
                  onClick={() => {
                    if (confirm("Reset ALL custom uploaded treatment photos back to default?")) {
                      resetTreatmentImageOverrides();
                      setTreatmentOverrides({});
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Reset All Custom Photos ({Object.keys(treatmentOverrides).length})
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 flex-wrap pt-4">
              {TREATMENT_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
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

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENT_CATEGORIES.find((c) => c.category === selectedCategory)?.treatments.map((tName) => {
              const hasCustom = !!treatmentOverrides[tName];
              const currentImg = treatmentOverrides[tName];

              return (
                <div key={tName} className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h4 className="font-display text-base font-semibold text-foreground leading-snug">{tName}</h4>
                      {hasCustom ? (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                          <CheckCircle className="w-3 h-3" /> Custom Photo
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full whitespace-nowrap">
                          Default
                        </span>
                      )}
                    </div>

                    {/* Image Preview Box */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#ECE0CF] to-[#B49E7E] border border-border flex items-center justify-center">
                      {currentImg ? (
                        <img src={currentImg} alt={tName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center p-4">
                          <Image className="w-8 h-8 text-white/70 mx-auto mb-2" />
                          <span className="text-xs text-white/90 font-medium">Default Treatment Image</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload Controls */}
                  <div className="space-y-2 pt-2">
                    <label className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#974d08] text-white rounded-xl text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity shadow-sm">
                      <UploadCloud className="w-4 h-4" /> {hasCustom ? "Replace Photo" : "Upload Photo"}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUploadPhoto(tName, file);
                        }}
                        className="hidden"
                      />
                    </label>

                    {hasCustom && (
                      <button
                        onClick={() => handleRemovePhoto(tName)}
                        className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Revert to Default
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: HEADER CODE & ANALYTICS */}
      {activeTab === "scripts" && (
        <form onSubmit={handleSaveScripts} className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-5 max-w-4xl">
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#974d08] mb-1">
                <Code className="w-4 h-4" /> Header & Custom Scripts Injector
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Global Head Code & Analytics (GA4, GTM, Meta Pixel)</h3>
            </div>
            {scriptsSavedSuccess && (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> Scripts Active Live in Head!
              </span>
            )}
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Paste custom JavaScript tags (<code className="bg-muted px-1.5 py-0.5 rounded">&lt;script&gt;</code>), Google Analytics (GA4), Google Tag Manager (GTM), Facebook/Meta Pixel, or custom CSS styling (<code className="bg-muted px-1.5 py-0.5 rounded">&lt;style&gt;</code>). These scripts will automatically inject into the site's <code className="bg-muted px-1.5 py-0.5 rounded">&lt;head&gt;</code> across all pages.
          </p>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-foreground">Custom Header Code / Scripts</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const snippet = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-XXXXXXXXXX');\n</script>`;
                    setCustomScripts((prev) => prev ? `${prev}\n\n${snippet}` : snippet);
                  }}
                  className="text-[10px] font-semibold text-[#974d08] bg-[#974d08]/10 px-2.5 py-1 rounded hover:bg-[#974d08]/20 transition-colors"
                >
                  + Insert GA4 Template
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const snippet = `<!-- Meta Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', 'YOUR_PIXEL_ID');\nfbq('track', 'PageView');\n</script>`;
                    setCustomScripts((prev) => prev ? `${prev}\n\n${snippet}` : snippet);
                  }}
                  className="text-[10px] font-semibold text-[#974d08] bg-[#974d08]/10 px-2.5 py-1 rounded hover:bg-[#974d08]/20 transition-colors"
                >
                  + Insert Meta Pixel
                </button>
              </div>
            </div>
            <textarea
              rows={12}
              value={customScripts}
              onChange={(e) => setCustomScripts(e.target.value)}
              placeholder="<!-- Paste your Google Analytics GA4 script, GTM code or custom <script> tags here -->"
              className="w-full px-4 py-3 border border-border rounded-xl bg-background text-xs font-mono outline-none focus:border-[#974d08] leading-relaxed"
            />
          </div>

          <div className="pt-4 border-t border-border flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#974d08] text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 shadow-md transition-opacity"
            >
              <Save className="w-4 h-4" /> Save & Inject Custom Scripts to Head
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
