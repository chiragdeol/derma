export interface PageSEO {
  path: string;
  pageName: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  robots: string;
}

export const DEFAULT_SEO_CONFIG: Record<string, PageSEO> = {
  "/": {
    path: "/",
    pageName: "Home Page",
    title: "Al Nemah Clinic Sharjah — Aesthetic, Laser & Dental Medical Center",
    description: "Doctor-led aesthetic medicine, laser hair removal, HydraFacial, skin care, and cosmetic dentistry in New Muweilah, Sharjah. Book your consultation today.",
    keywords: "aesthetic clinic sharjah, dental clinic sharjah, laser hair removal sharjah, hydrafacial sharjah, botox sharjah, fillers sharjah, hollywood smile sharjah",
    ogTitle: "Al Nemah Medical Center — Where Medicine Meets Artistry",
    ogDescription: "Doctor-led skin, laser, and dental care in New Muweilah, Sharjah. High-precision natural aesthetic transformations.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/",
    robots: "index, follow",
  },
  "/about": {
    path: "/about",
    pageName: "About Us",
    title: "About Al Nemah Clinic — Board-Certified Doctors in Sharjah",
    description: "Learn about Al Nemah Medical Center in Sharjah. Multidisciplinary team of dermatologists, aesthetic practitioners, and general dentists.",
    keywords: "about al nemah clinic, doctors in sharjah, dermatologist sharjah, general dentist sharjah, best aesthetic clinic muweilah",
    ogTitle: "About Al Nemah Clinic — Sharjah Medical Center",
    ogDescription: "Physician-led care, luxury interiors, and evidence-based aesthetic & dental protocols in Sharjah.",
    ogImage: "https://alnemahmc.com/team.jpg",
    canonicalUrl: "https://alnemahmc.com/about",
    robots: "index, follow",
  },
  "/services": {
    path: "/services",
    pageName: "Services Overview",
    title: "Our Services — Aesthetic, Laser, Lifting & Dental Care Sharjah",
    description: "Explore all six specialized medical divisions at Al Nemah Clinic Sharjah: Injectables, Skin, Laser, Lifting, Dental, and Wellness.",
    keywords: "dermatology services sharjah, dental services sharjah, laser treatments, morpheus8, profhilo, iv drips sharjah",
    ogTitle: "Our Services — Al Nemah Medical Center Sharjah",
    ogDescription: "Comprehensive 360° health & beauty solutions delivered with medical excellence.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services",
    robots: "index, follow",
  },
  "/services/skin": {
    path: "/services/skin",
    pageName: "Skin & HydraFacial",
    title: "Skin & HydraFacial Treatments in Sharjah | Al Nemah Clinic",
    description: "Medical-grade HydraFacial (AED 299), chemical peels, mesotherapy, microneedling, skin boosters, and PRP facials in Sharjah.",
    keywords: "hydrafacial sharjah, skin care sharjah, chemical peel sharjah, mesotherapy, microneedling sharjah, skin boosters",
    ogTitle: "Skin & HydraFacial Treatments — Al Nemah Clinic",
    ogDescription: "Luminous, healthy skin with physician-curated facial protocols.",
    ogImage: "https://alnemahmc.com/skin-hydrafacial-treatment.jpg",
    canonicalUrl: "https://alnemahmc.com/services/skin",
    robots: "index, follow",
  },
  "/services/injectables": {
    path: "/services/injectables",
    pageName: "Cosmetic Injectables",
    title: "Botox, Dermal Fillers & Profhilo in Sharjah | Al Nemah Clinic",
    description: "Natural cosmetic injectables in Sharjah: Botox (AED 750), Dermal Fillers (AED 499), Profhilo, Sculptra, and Lip Enhancement.",
    keywords: "botox sharjah, dermal fillers sharjah, profhilo sharjah, lip filler sharjah, sculptra, rejuran sharjah",
    ogTitle: "Cosmetic Injectables — Al Nemah Clinic Sharjah",
    ogDescription: "Anatomical, subtle facial enhancement by certified doctors.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services/injectables",
    robots: "index, follow",
  },
  "/services/laser": {
    path: "/services/laser",
    pageName: "Laser & Hair Removal",
    title: "Laser Hair Removal & Body Lasers in Sharjah | Al Nemah Clinic",
    description: "Advanced laser hair removal, pigmentation laser, vascular treatment, tattoo removal, and laser skin resurfacing in Sharjah.",
    keywords: "laser hair removal sharjah, painless laser sharjah, pigmentation laser, tattoo removal sharjah, ipl photofacial",
    ogTitle: "Laser Hair Removal & Laser Treatments — Al Nemah Clinic",
    ogDescription: "Multi-wavelength laser platforms safe for all skin types.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services/laser",
    robots: "index, follow",
  },
  "/services/lifting": {
    path: "/services/lifting",
    pageName: "Anti-Aging & Lifting",
    title: "Morpheus8, Ultherapy & HIFU Non-Surgical Lift in Sharjah",
    description: "Non-surgical face lifting in Sharjah: Morpheus8, Ultherapy, PDO Threads, Fotona 4D, HIFU, and Endolift.",
    keywords: "morpheus8 sharjah, ultherapy sharjah, hifu sharjah, pdo threads sharjah, fotona 4d, face lifting sharjah",
    ogTitle: "Anti-Aging & Non-Surgical Lifting — Al Nemah Clinic",
    ogDescription: "Restore structural contour and skin firmness without surgery.",
    ogImage: "https://alnemahmc.com/lifting-hifu-treatment.jpg",
    canonicalUrl: "https://alnemahmc.com/services/lifting",
    robots: "index, follow",
  },
  "/services/dental/aesthetic-dentistry": {
    path: "/services/dental/aesthetic-dentistry",
    pageName: "Aesthetic Dentistry",
    title: "Veneers, Teeth Whitening & Hollywood Smile Sharjah | Al Nemah",
    description: "Cosmetic dentistry in Sharjah: Porcelain Veneers (AED 1,499), Laser Teeth Whitening (AED 999), Invisalign, and Hollywood Smile.",
    keywords: "veneers sharjah, teeth whitening sharjah, hollywood smile sharjah, invisalign sharjah, cosmetic dentist sharjah",
    ogTitle: "Aesthetic Dentistry & Hollywood Smile — Al Nemah Clinic",
    ogDescription: "Bespoke digital smile design for ultimate confidence.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services/dental/aesthetic-dentistry",
    robots: "index, follow",
  },
  "/services/dental/clinical-dentistry": {
    path: "/services/dental/clinical-dentistry",
    pageName: "Clinical Dentistry",
    title: "Dentist in Sharjah — Dental Implants, Root Canal & Scaling",
    description: "Comprehensive clinical dental care in Sharjah: Dental Implants (AED 3,499), Scaling & Polishing (AED 300), Fillings, and Root Canal.",
    keywords: "dentist in sharjah, dental implants sharjah, scaling polishing sharjah, root canal sharjah, teeth cleaning sharjah",
    ogTitle: "Clinical Dentistry Services — Al Nemah Clinic Sharjah",
    ogDescription: "Gentle, expert dental care for long-term oral health.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services/dental/clinical-dentistry",
    robots: "index, follow",
  },
  "/services/wellness": {
    path: "/services/wellness",
    pageName: "Wellness & Longevity",
    title: "IV Drips & Vitamin Therapy in Sharjah | Al Nemah Clinic",
    description: "Clinical IV drips in Sharjah: Glow Drip (AED 299), Vitamin C (AED 249), NAD+ (AED 799), and Immune Boost.",
    keywords: "iv drip sharjah, nad therapy sharjah, vitamin c drip sharjah, immune boost iv, wellness clinic sharjah",
    ogTitle: "Wellness & Cellular Longevity — Al Nemah Clinic",
    ogDescription: "Inside-out vitality with customized IV nutrition.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/services/wellness",
    robots: "index, follow",
  },
  "/contact": {
    path: "/contact",
    pageName: "Contact Us",
    title: "Contact Al Nemah Clinic Sharjah — Location & Phone",
    description: "Contact Al Nemah Medical Center in Sharjah. Located behind Zahia City Center, New Muweilah. Phone: +971 50 099 9324 & +971 56 681 4451.",
    keywords: "contact al nemah clinic, al nemah location, aesthetic clinic muweilah address, dental clinic sharjah phone",
    ogTitle: "Contact Al Nemah Medical Center Sharjah",
    ogDescription: "Open daily 9:00 AM – 10:00 PM. Call or WhatsApp us to book.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: "https://alnemahmc.com/contact",
    robots: "index, follow",
  },
};

const STORAGE_KEY = "alnemah_seo_config_v1";

export function getAllPageSEO(): Record<string, PageSEO> {
  if (typeof window === "undefined") return DEFAULT_SEO_CONFIG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_SEO_CONFIG;
    const parsed = JSON.parse(saved);
    return { ...DEFAULT_SEO_CONFIG, ...parsed };
  } catch (e) {
    console.error("Failed to load SEO config", e);
    return DEFAULT_SEO_CONFIG;
  }
}

export function getSEOForPage(path: string): PageSEO {
  const all = getAllPageSEO();
  return all[path] || DEFAULT_SEO_CONFIG[path] || {
    path,
    pageName: "Custom Page",
    title: "Al Nemah Clinic Sharjah — Medical Center",
    description: "Doctor-led aesthetic, laser, and dental treatments in Sharjah.",
    keywords: "aesthetic clinic, dental clinic, sharjah",
    ogTitle: "Al Nemah Clinic Sharjah",
    ogDescription: "Where advanced medicine meets aesthetic artistry.",
    ogImage: "https://alnemahmc.com/logo-al-nemah.png",
    canonicalUrl: `https://alnemahmc.com${path}`,
    robots: "index, follow",
  };
}

export function saveSEOForPage(path: string, seo: PageSEO) {
  if (typeof window === "undefined") return;
  const current = getAllPageSEO();
  current[path] = seo;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
}

export function resetSEOToDefaults() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function applySEOToDocument(path: string) {
  if (typeof window === "undefined") return;
  const seo = getSEOForPage(path);

  // Title
  document.title = seo.title;

  // Helper to set or create meta tag
  const setMeta = (nameAttr: string, attrVal: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(nameAttr, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta("name", "description", seo.description);
  setMeta("name", "keywords", seo.keywords);
  setMeta("name", "robots", seo.robots);
  setMeta("property", "og:title", seo.ogTitle || seo.title);
  setMeta("property", "og:description", seo.ogDescription || seo.description);
  setMeta("property", "og:image", seo.ogImage || "https://alnemahmc.com/og-cover.png");
  setMeta("property", "og:image:secure_url", seo.ogImage || "https://alnemahmc.com/og-cover.png");
  setMeta("property", "og:image:type", "image/png");
  setMeta("property", "og:image:width", "1200");
  setMeta("property", "og:image:height", "630");
  setMeta("property", "og:url", seo.canonicalUrl);
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", seo.ogTitle || seo.title);
  setMeta("name", "twitter:description", seo.ogDescription || seo.description);
  setMeta("name", "twitter:image", seo.ogImage || "https://alnemahmc.com/og-cover.png");

  // Canonical
  let canonicalEl = document.querySelector(`link[rel="canonical"]`);
  if (!canonicalEl) {
    canonicalEl = document.createElement("link");
    canonicalEl.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute("href", seo.canonicalUrl);
}

const SCRIPTS_STORAGE_KEY = "alnemah_custom_header_scripts_v1";

export function getCustomHeaderScripts(): string {
  if (typeof window === "undefined") return "";
  try {
    return localStorage.getItem(SCRIPTS_STORAGE_KEY) || "";
  } catch (e) {
    return "";
  }
}

export function saveCustomHeaderScripts(scripts: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SCRIPTS_STORAGE_KEY, scripts);
  applyCustomHeaderScripts();
}

export function applyCustomHeaderScripts() {
  if (typeof window === "undefined") return;
  const scripts = getCustomHeaderScripts();
  
  // Remove existing injected container if any
  let container = document.getElementById("alnemah-injected-header-scripts");
  if (container) {
    container.remove();
  }

  if (!scripts.trim()) return;

  container = document.createElement("div");
  container.id = "alnemah-injected-header-scripts";
  container.style.display = "none";
  
  try {
    const range = document.createRange();
    range.selectNode(document.head);
    const fragment = range.createContextualFragment(scripts);
    container.appendChild(fragment);
    document.head.appendChild(container);
  } catch (e) {
    console.error("Error executing custom header scripts", e);
  }
}

