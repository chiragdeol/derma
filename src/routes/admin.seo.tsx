import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  getAllPageSEO, 
  getSEOForPage, 
  saveSEOForPage, 
  resetSEOToDefaults,
  DEFAULT_SEO_CONFIG,
  type PageSEO 
} from "@/lib/seo-manager";
import { Globe, Lock, Save, RefreshCw, Download, Upload, CheckCircle, Search, Eye, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/admin/seo")({
  head: () => ({
    meta: [
      { title: "SEO Admin Panel — Al Nemah Medical Center" },
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

function AdminSEOManager() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState(false);

  const [selectedPath, setSelectedPath] = useState("/");
  const [seoForm, setSeoForm] = useState<PageSEO>(DEFAULT_SEO_CONFIG["/"]);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    // Check if passcode previously entered
    const storedAuth = sessionStorage.getItem("alnemah_admin_authed");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setSeoForm(getSEOForPage(selectedPath));
      setSavedSuccess(false);
    }
  }, [selectedPath, isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "alnemah2026" || passcode === "admin123") {
      setIsAuthenticated(true);
      sessionStorage.setItem("alnemah_admin_authed", "true");
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
    </div>
  );
}
