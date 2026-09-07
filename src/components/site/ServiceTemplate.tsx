import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import interiorImg from "@/assets/about-reception.jpg";
import aboutReceptionImg from "@/assets/about-reception.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import baLaser1Before from "@/assets/ba-laser-1-before.jpg";
import baLaser1After from "@/assets/ba-laser-1-after.jpg";
import baLaser2Before from "@/assets/ba-laser-2-before.jpg";
import baLaser2After from "@/assets/ba-laser-2-after.jpg";

import acneBefore from "@/assets/drive_beforeafter/acne_before.jpg";
import acneAfter from "@/assets/drive_beforeafter/acne_after.jpg";
import endoliftBefore from "@/assets/drive_beforeafter/endolift_before.jpg";
import endoliftAfter from "@/assets/drive_beforeafter/endolift_after.jpg";
import teethCleaningBefore from "@/assets/drive_beforeafter/teeth_cleaning_before.jpg";
import teethCleaningAfter from "@/assets/drive_beforeafter/teeth_cleaning_after.jpg";
import teethWhitening1 from "@/assets/drive_beforeafter/teeth_whitening_1.jpg";
import teethWhitening2 from "@/assets/drive_beforeafter/teeth_whitening_2.jpg";
import veneer1 from "@/assets/drive_beforeafter/veneer_1.jpg";
import veneer2 from "@/assets/drive_beforeafter/veneer_2.jpg";

import { getAllTreatmentImageOverrides, getTreatmentImageOverride, getTreatmentAltOverride } from "@/lib/treatment-image-manager";
import { BeforeAfterSlider, BeforeAfterCarousel } from "./BeforeAfterSlider";

export type ServiceTreatment = {
  name: string;
  body: string;
  tags: string[];
  duration: string;
  price: string;
  points?: string[];
  image?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type RelatedItem = {
  slug: string;
  label: string;
};

export type ServiceTemplateProps = {
  division: string;
  divisionUrl: string;
  categoryName: string;
  eyebrow: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  highlights: [string, string][];
  concerns: string[];
  txIntro: string;
  treatments: ServiceTreatment[];
  faqs: FAQItem[];
  related: RelatedItem[];
  heroImage: string;
  whyImage?: string;
  dental?: boolean;
  beforeImage?: string;
  afterImage?: string;
  videoSection?: {
    eyebrow: string;
    title: string;
    body: string;
    videoUrl: string;
    posterUrl: string;
  };
};

const FAQAccordionItem = ({ question, answer }: FAQItem) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-5 font-display text-lg text-foreground cursor-pointer group"
      >
        <span>{question}</span>
        <span className={`text-[#974d08] text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-muted-foreground/95 leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

function getTreatmentBeforeAfter(treatmentName: string, propBefore?: string, propAfter?: string): [string, string] | null {
  const norm = (treatmentName || "").toLowerCase();
  
  if (norm.includes("acne") || norm.includes("peel") || norm.includes("hydrafacial")) {
    return [acneBefore, acneAfter];
  }
  if (norm.includes("endolift")) {
    return [endoliftBefore, endoliftAfter];
  }
  if (norm.includes("cleaning") || norm.includes("scaling") || norm.includes("polishing")) {
    return [teethCleaningBefore, teethCleaningAfter];
  }
  if (norm.includes("whitening")) {
    return [teethWhitening1, teethWhitening2];
  }
  if (norm.includes("veneer") || norm.includes("hollywood")) {
    return [veneer1, veneer2];
  }
  if (norm.includes("hair removal") || norm.includes("full body") || (norm.includes("laser") && !norm.includes("tattoo") && !norm.includes("vascular"))) {
    return [baLaser1Before, baLaser1After];
  }
  if (norm.includes("tattoo") || norm.includes("vascular")) {
    return [baLaser2Before, baLaser2After];
  }
  
  // If explicitly passed prop images exist for this page:
  if (propBefore && propAfter) {
    return [propBefore, propAfter];
  }

  return null;
}

export function BeforeAfterSection({
  treatments,
  beforeImage,
  afterImage,
}: {
  treatments: { name: string }[];
  beforeImage?: string;
  afterImage?: string;
}) {
  // Filter treatments to ONLY those that have real before & after images
  const uniqueItemsMap = new Map<string, { id: string; treatmentName: string; beforeImage: string; afterImage: string; category?: string }>();

  for (const t of treatments) {
    const pair = getTreatmentBeforeAfter(t.name, beforeImage, afterImage);
    if (pair) {
      const pairKey = pair.join("::");
      if (!uniqueItemsMap.has(pairKey)) {
        uniqueItemsMap.set(pairKey, {
          id: t.name,
          treatmentName: t.name,
          beforeImage: pair[0],
          afterImage: pair[1],
          category: "Real Clinical Result",
        });
      }
    }
  }

  const realItems = Array.from(uniqueItemsMap.values());

  // Strict Rule: If NO real images exist for this page, hide section completely
  if (realItems.length === 0) {
    return null;
  }

  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = realItems[activeIdx] || realItems[0];

  const prevTreatment = () => {
    setActiveIdx((prev) => (prev - 1 + realItems.length) % realItems.length);
  };

  const nextTreatment = () => {
    setActiveIdx((prev) => (prev + 1) % realItems.length);
  };

  return (
    <section className="py-20 bg-card border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-12">
        {/* Multi-Card Carousel Header & Track (only if > 1 item) */}
        {realItems.length > 1 && (
          <BeforeAfterCarousel
            items={realItems}
            title="Real Clinical Results"
            subtitle="Before & After Patient Transformations"
          />
        )}

        <div className={`grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center ${realItems.length > 1 ? "border-t border-border/60 pt-12" : ""}`}>
          {/* Left Column: Interactive Slider */}
          <div className="w-full space-y-3">
            <BeforeAfterSlider
              key={activeItem.treatmentName}
              beforeImage={activeItem.beforeImage}
              afterImage={activeItem.afterImage}
            />
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#974d08] bg-[#974d08]/10 px-3 py-1 rounded-full">
                {activeItem.treatmentName}
              </span>
              {realItems.length > 1 && (
                <span className="text-[11px] text-muted-foreground font-mono">
                  Result {activeIdx + 1} of {realItems.length}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Descriptions & Selectors */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <p className="eyebrow text-[#974d08]">Verified Patient Results</p>
              {realItems.length > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTreatment}
                    className="w-9 h-9 rounded-full border border-border bg-background hover:bg-accent/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
                    aria-label="Previous treatment result"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTreatment}
                    className="w-9 h-9 rounded-full border border-border bg-background hover:bg-accent/20 flex items-center justify-center text-foreground transition-colors cursor-pointer"
                    aria-label="Next treatment result"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              See the transformation.
            </h2>
            <p className="text-base text-muted-foreground/95 leading-relaxed mb-6">
              Every image is a real Al Nemah patient, shared with written consent. Drag the handle to compare.
            </p>
            
            {realItems.length > 1 && (
              <>
                <p className="font-display italic text-xs text-muted-foreground/80 mb-3">
                  Select a treatment to view its Before & After result:
                </p>
                
                {/* Thumbnails / Pills row */}
                <div className="flex gap-2 flex-wrap">
                  {realItems.map((item, idx) => (
                    <button
                      key={item.treatmentName}
                      onClick={() => setActiveIdx(idx)}
                      className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 font-sans cursor-pointer ${
                        activeIdx === idx
                          ? 'border-[#974d08] text-white bg-[#974d08] font-semibold shadow-sm scale-105'
                          : 'border-border/80 text-muted-foreground bg-background hover:border-[#974d08]/60 hover:text-foreground'
                      }`}
                    >
                      {item.treatmentName}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceTemplate({
  division,
  divisionUrl,
  categoryName,
  eyebrow,
  metaTitle,
  metaDesc,
  h1,
  intro,
  highlights = [],
  concerns = [],
  txIntro,
  treatments = [],
  faqs = [],
  related = [],
  heroImage,
  whyImage,
  dental = false,
  beforeImage,
  afterImage,
  videoSection,
}: ServiceTemplateProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [overrides, setOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    const syncOverrides = () => {
      const all = getAllTreatmentImageOverrides();
      setOverrides({ ...all });
    };
    syncOverrides();
    const timer1 = setTimeout(syncOverrides, 100);
    const timer2 = setTimeout(syncOverrides, 500);
    window.addEventListener("treatment_images_updated", syncOverrides);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("treatment_images_updated", syncOverrides);
    };
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
        setVideoPlaying(false);
      } else {
        videoRef.current.play();
        setVideoPlaying(true);
      }
    }
  };

  return (
    <>
      {/* BREADCRUMBS & HERO */}
      <section className="pt-36 sm:pt-32 pb-16 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <nav className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to={divisionUrl as any} className="hover:text-foreground transition-colors">{division}</Link>
            <span>/</span>
            <span className="text-[#974d08]">{categoryName}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow text-[#974d08] block mb-3 font-semibold">{eyebrow}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground mb-6">
                {h1}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl font-light mb-8">
                {intro}
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <a href="https://wa.me/971500999324" className="rounded-full bg-[#974d08] px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-all shadow-md">
                  Book consultation
                </a>
                <a href="#treatments" className="rounded-full border border-border/80 bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-accent/20 transition-all">
                  Explore treatments
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="p-3.5 border border-[#974d08]/40 rounded-2xl relative">
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative shadow-lg">
                  <img 
                    src={heroImage} 
                    alt={categoryName} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / SPECS */}
      {highlights && highlights.length > 0 && (
        <section className="py-12 bg-card border-y border-border/60">
          <div className="mx-auto max-w-6xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map(([val, label]) => (
              <div key={label} className="p-4 rounded-xl bg-background border border-border/60">
                <div className="font-display text-2xl md:text-3xl text-[#974d08] font-bold mb-1">{val}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONCERNS WE TREAT */}
      {concerns && concerns.length > 0 && (
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="max-w-xl mb-8">
              <p className="eyebrow mb-2">Targeted solutions</p>
              <h2 className="font-display text-2xl md:text-3xl">Concerns we address.</h2>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {concerns.map((c) => (
                <span key={c} className="text-xs font-semibold text-foreground border border-border/80 px-4 py-2 rounded-full bg-card shadow-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TREATMENTS LIST */}
      <section id="treatments" className="py-20 bg-background border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-3">Customized care</p>
            <h2 className="font-display text-3xl md:text-4xl">Everything under {categoryName}.</h2>
            <p className="mt-4 text-base text-muted-foreground/90">{txIntro}</p>
          </div>
          <div className="flex flex-col">
            {treatments.map((t, idx) => (
              <div key={t.name} className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 items-center py-16 border-t border-border/60 first:border-0 first:pt-2">
                {/* Left Column: Media */}
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="p-3.5 border border-[#974d08]/40 rounded-2xl relative">
                    <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br from-[#ECE0CF] to-[#B49E7E] flex items-end relative">
                      {getTreatmentImageOverride(t.name) || overrides[t.name] || t.image ? (
                        <img 
                          src={getTreatmentImageOverride(t.name) || overrides[t.name] || t.image} 
                          alt={getTreatmentAltOverride(t.name) || `${t.name} Treatment in Sharjah — Al Nemah Medical Center`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
                        />
                      ) : (
                        <span className="m-4 text-[10px] italic font-display text-white bg-black/40 px-3 py-1.5 rounded z-10">
                          {t.name} — treatment photo
                        </span>
                      )}
                    </div>
                    {/* Price badge */}
                    <div className="absolute -right-3 top-8 bg-[#974d08] border border-[#974d08] px-4 py-2.5 rounded-xl shadow-lg z-10 flex flex-col items-start min-w-[105px]">
                      <small className="text-[9px] uppercase tracking-wider text-white/90 font-medium">From</small>
                      <b className="font-display text-base text-white font-bold mt-0.5">{t.price.replace('From ', '')}</b>
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Content */}
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest text-[#974d08] uppercase mb-3">
                    Treatment 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{t.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4 max-w-xl">{t.body}</p>
                  
                  {/* Detailed Points (if any) */}
                  {t.points && t.points.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {t.points.map((p) => (
                        <li key={p} className="relative pl-6 text-sm text-foreground/90">
                          <span className="absolute left-0 text-[#974d08] font-bold">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Tags */}
                  {t.tags && t.tags.length > 0 && (
                    <ul className="flex gap-2 flex-wrap mb-6">
                      {t.tags.map((tag) => (
                        <li key={tag} className="text-xs text-muted-foreground border border-border/85 px-2.5 py-1 rounded-full">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Meta / Duration info split by dot */}
                  {t.duration && (
                    <div className="flex gap-6 flex-wrap py-4 border-y border-border/60 mb-6">
                      {t.duration.split('·').map((m) => {
                        const parts = m.trim().split(' ');
                        const val = parts[0] || '';
                        const label = parts.slice(1).join(' ') || 'Info';
                        return (
                          <div key={m} className="flex flex-col">
                            <b className="font-display text-base text-foreground font-semibold">{val}</b>
                            <small className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</small>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  
                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://wa.me/971500999324" className="rounded-lg bg-[#974d08] text-white px-5 py-2.5 text-xs font-semibold hover:opacity-95 transition-all shadow-sm">
                      Book {t.name}
                    </a>
                    <a href="https://wa.me/971500999324" className="rounded-lg bg-[#5b5e52] px-5 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-sm">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      {videoSection && (
        <section className="bg-[#5b5e52] text-[#E9E6DC] py-16 lg:py-20 border-b border-border/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center">
            <span className="eyebrow text-[#EBD9C9] mb-3 font-semibold">{videoSection.eyebrow}</span>
            <h2 className="font-display text-3xl md:text-4xl text-[#F4F1E8] mb-4">{videoSection.title}</h2>
            <p className="text-sm text-[#CBC7BA] leading-relaxed mb-10 max-w-2xl font-light">
              {videoSection.body}
            </p>

            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <video
                ref={videoRef}
                src={videoSection.videoUrl}
                poster={videoSection.posterUrl}
                controls={videoPlaying}
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setVideoPlaying(false)}
              />
              {!videoPlaying && (
                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 rounded-full bg-[#974d08] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                  <span className="mt-3 text-xs font-semibold tracking-wider text-white uppercase">Watch Treatment Video</span>
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* BEFORE / AFTER CAROUSEL & SLIDER (ONLY RENDERS IF REAL PHOTOS EXIST) */}
      <BeforeAfterSection 
        treatments={treatments} 
        beforeImage={beforeImage}
        afterImage={afterImage}
      />

      {/* WHY AL NEMAH */}
      <section className="py-20 bg-forest text-ivory">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-4 text-[#974d08]">Why Al Nemah</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
              Care you can trust, results that look natural.
            </h2>
            <div className="flex flex-col gap-6">
              <div className="border-t border-ivory/20 pt-5 flex gap-4">
                <span className="font-display text-xl text-[#974d08]">01</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">Doctor-led, always</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">Every treatment is planned and performed by licensed specialists — never delegated.</p>
                </div>
              </div>
              <div className="border-t border-ivory/20 pt-5 flex gap-4">
                <span className="font-display text-xl text-[#974d08]">02</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">Honest recommendations</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">We advise what you actually need, and talk you out of what you don't.</p>
                </div>
              </div>
              <div className="border-t border-ivory/20 pt-5 border-b border-ivory/20 pb-5 flex gap-4">
                <span className="font-display text-xl text-[#974d08]">03</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">SHA licensed</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">A fully accredited, safety-first clinic in Sharjah.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: photo */}
          <div className="relative">
            <div className="p-3 border border-ivory/30 rounded-2xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={whyImage || aboutReceptionImg}
                  alt="Al Nemah Clinic Reception"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      {faqs && faqs.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <p className="eyebrow mb-4">Good to know</p>
              <h2 className="font-display text-3xl md:text-4xl">Frequently asked questions.</h2>
            </div>
            <div className="border-t border-border/60">
              {faqs.map((f) => (
                <FAQAccordionItem key={f.question} {...f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED CATEGORIES */}
      {related && related.length > 0 && (
        <section className="py-20 bg-card border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-10">
              <p className="eyebrow mb-3">Explore more</p>
              <h2 className="font-display text-2xl md:text-3xl">Related categories.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} to={r.slug} className="block bg-background border border-border/60 hover:border-[#974d08]/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#974d08] font-semibold mb-2 block">
                    Explore Related
                  </span>
                  <h3 className="font-display text-base text-foreground font-semibold mb-2">{r.label}</h3>
                  <span className="text-xs font-semibold text-primary">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOOK CTA BAR */}
      <section id="book-consultation" className="bg-[#e3dec9] py-16 text-center border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow text-[#974d08] mb-4 font-semibold">Ready when you are</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">Book your consultation.</h2>
          <p className="text-sm text-foreground/80 max-w-md mx-auto mb-8 font-medium">
            A specialist replies within 15 minutes during clinic hours — no pressure, just honest advice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/971500999324" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-all">
              Book consultation
            </a>
            <a href="tel:+971500999324" className="rounded-lg border border-foreground/30 px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground/5 transition-all">
              Call the clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
