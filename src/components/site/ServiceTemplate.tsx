import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import interiorImg from "@/assets/interior.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export type ServiceTreatment = {
  name: string;
  body: string;
  tags: string[];
  duration: string;
  price: string;
  points?: string[];
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
  dental?: boolean;
};

const FAQItemComponent = ({ question, answer }: FAQItem) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left py-5 font-display text-lg text-foreground cursor-pointer group"
      >
        <span>{question}</span>
        <span className={`text-[#d2a960] text-xl transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-muted-foreground/95 leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

export function BeforeAfterSection({ treatments }: { treatments: { name: string }[] }) {
  const [activeTreatment, setActiveTreatment] = useState(treatments[0]?.name || "");
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="py-20 bg-card border-y border-border/60">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        {/* Left Column: Interactive Slider */}
        <div 
          ref={containerRef}
          onMouseDown={(e) => {
            isDragging.current = true;
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            isDragging.current = true;
            handleMove(e.touches[0].clientX);
          }}
          onMouseMove={(e) => {
            if (isDragging.current) handleMove(e.clientX);
          }}
          onTouchMove={(e) => {
            if (isDragging.current) handleMove(e.touches[0].clientX);
          }}
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border select-none cursor-ew-resize shadow-sm"
        >
          {/* After image */}
          <div className="absolute inset-0 flex items-end justify-end p-4">
            <img 
              src={afterImg}
              alt="After treatment"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="relative z-10 text-[10px] uppercase tracking-wider font-semibold text-white bg-black/45 px-3 py-1.5 rounded">
              After
            </span>
          </div>
          
          {/* Before image (clipped) */}
          <div 
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            className="absolute inset-0 flex items-end justify-start p-4"
          >
            <img 
              src={beforeImg}
              alt="Before treatment"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="relative z-10 text-[10px] uppercase tracking-wider font-semibold text-white bg-black/45 px-3 py-1.5 rounded">
              Before
            </span>
          </div>

          {/* Treatment Label Overlay */}
          <span className="absolute left-4 top-4 font-display italic text-xs text-white bg-black/40 px-3 py-1.5 rounded shadow">
            {activeTreatment}
          </span>

          {/* Slider Line & Knob */}
          <div 
            style={{ left: `${position}%` }}
            className="absolute top-0 bottom-0 w-0.5 bg-[#d2a960] -translate-x-1/2 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-[#d2a960] shadow-md flex items-center justify-center text-[#d2a960] font-bold text-xs select-none">
              ⇆
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions & Selectors */}
        <div className="flex flex-col">
          <p className="eyebrow mb-4">Real results</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            See the difference.
          </h2>
          <p className="text-base text-muted-foreground/95 leading-relaxed mb-6">
            Every result is a real Al Nemah patient, shared with written consent. Drag the handle to compare — and pick a treatment below.
          </p>
          <p className="font-display italic text-sm text-muted-foreground/80 mb-4">
            Slide to reveal before & after
          </p>
          
          {/* Thumbnails row */}
          <div className="flex gap-2 flex-wrap">
            {treatments.map((t) => (
              <button
                key={t.name}
                onClick={() => setActiveTreatment(t.name)}
                className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 font-sans cursor-pointer ${
                  activeTreatment === t.name
                    ? 'border-[#d2a960] text-primary bg-background font-medium'
                    : 'border-border/80 text-muted-foreground hover:border-[#d2a960]/60'
                }`}
              >
                {t.name}
              </button>
            ))}
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
  highlights,
  concerns,
  txIntro,
  treatments,
  faqs,
  related,
  heroImage,
  dental = false,
}: ServiceTemplateProps) {
  return (
    <>
      {/* BREADCRUMB */}
      <nav className="border-b border-border/60 bg-card py-4 text-xs text-muted-foreground mt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 flex gap-2 items-center flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="text-primary/70">›</span>
          <Link to="/services" className="hover:text-primary">Treatments</Link>
          <span className="text-primary/70">›</span>
          <Link to={divisionUrl} className="hover:text-primary">{division}</Link>
          <span className="text-primary/70">›</span>
          <span className="text-foreground font-semibold">{categoryName}</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              {h1.includes("Sharjah") ? (
                <>
                  {h1.replace("Sharjah", "")}
                  <em className="italic text-[#d2a960] font-light">Sharjah</em>
                </>
              ) : (
                h1
              )}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/95 leading-relaxed max-w-xl mb-8">
              {intro}
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              <a href="https://wa.me/971500999324" className="rounded-lg bg-[#d2a960] text-black px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all shadow-sm">
                Book a consultation
              </a>
              <a href="https://wa.me/971500999324" className="rounded-lg bg-[#1f6b53] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition-all shadow-sm flex items-center gap-1.5">
                WhatsApp us
              </a>
            </div>
            
            {/* Highlights block */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/70">
              {highlights.map(([val, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="font-display text-xl md:text-2xl text-foreground font-semibold">{val}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Hero photo */}
          <div className="relative">
            <div className="p-3 border border-[#d2a960]/30 rounded-2xl">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={heroImage}
                  alt={categoryName}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCERNS STRIP */}
      <div className="bg-card border-y border-border/50 py-6">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 flex items-center gap-4 flex-wrap">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/90">Concerns we treat</span>
          <div className="flex gap-2 flex-wrap">
            {concerns.map((c) => (
              <span key={c} className="text-xs bg-background border border-border/80 px-3 py-1.5 rounded-full text-foreground/95">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TREATMENTS ROWS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Treatments in {categoryName}</p>
            <h2 className="font-display text-3xl md:text-4xl">Everything under {categoryName}.</h2>
            <p className="mt-4 text-base text-muted-foreground/90">{txIntro}</p>
          </div>
          <div className="flex flex-col">
            {treatments.map((t, idx) => (
              <div key={t.name} className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 items-center py-16 border-t border-border/60 first:border-0 first:pt-2">
                {/* Left Column: Media */}
                <div className={`relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="p-3.5 border border-[#d2a960]/40 rounded-2xl relative">
                    <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-br from-[#ECE0CF] to-[#B49E7E] flex items-end">
                      <span className="m-4 text-[10px] italic font-display text-white bg-black/40 px-3 py-1.5 rounded">
                        {t.name} — treatment photo
                      </span>
                    </div>
                    {/* Price badge */}
                    <div className="absolute -right-3 top-8 bg-card border border-border/60 px-4 py-2.5 rounded-lg shadow-md z-10 flex flex-col items-start min-w-[100px]">
                      <small className="text-[9px] uppercase tracking-wider text-muted-foreground">From</small>
                      <b className="font-display text-base text-[#d2a960] mt-0.5">{t.price.replace('From ', '')}</b>
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Content */}
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest text-[#d2a960] uppercase mb-3">
                    Treatment 0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{t.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-4 max-w-xl">{t.body}</p>
                  
                  {/* Detailed Points (if any) */}
                  {t.points && t.points.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {t.points.map((p) => (
                        <li key={p} className="relative pl-6 text-sm text-foreground/90">
                          <span className="absolute left-0 text-[#d2a960] font-bold">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Tags */}
                  <ul className="flex gap-2 flex-wrap mb-6">
                    {t.tags.map((tag) => (
                      <li key={tag} className="text-xs text-muted-foreground border border-border/85 px-2.5 py-1 rounded-full">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Meta / Duration info split by dot */}
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
                  
                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <a href="https://wa.me/971500999324" className="rounded-lg bg-[#d2a960] text-black px-5 py-2.5 text-xs font-semibold hover:opacity-95 transition-all shadow-sm">
                      Book {t.name}
                    </a>
                    <a href="https://wa.me/971500999324" className="rounded-lg bg-[#1f6b53] px-5 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-sm">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER COMPARISON SECTION */}
      <BeforeAfterSection treatments={treatments} />

      {/* WHY AL NEMAH */}
      <section className="py-20 bg-forest text-ivory">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow mb-4 text-[#d2a960]">Why Al Nemah</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-8">
              Care you can trust, results that look natural.
            </h2>
            <div className="flex flex-col gap-6">
              <div className="border-t border-ivory/20 pt-5 flex gap-4">
                <span className="font-display text-xl text-[#d2a960]">01</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">Doctor-led, always</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">Every treatment is planned and performed by licensed specialists — never delegated.</p>
                </div>
              </div>
              <div className="border-t border-ivory/20 pt-5 flex gap-4">
                <span className="font-display text-xl text-[#d2a960]">02</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">Honest recommendations</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">We advise what you actually need, and talk you out of what you don't.</p>
                </div>
              </div>
              <div className="border-t border-ivory/20 pt-5 border-b border-ivory/20 pb-5 flex gap-4">
                <span className="font-display text-xl text-[#d2a960]">03</span>
                <div>
                  <h3 className="font-display text-lg text-white mb-1">SOH licensed</h3>
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
                  src={interiorImg}
                  alt="Al Nemah Clinic"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Good to know</p>
            <h2 className="font-display text-3xl md:text-4xl">Frequently asked questions.</h2>
          </div>
          <div className="flex flex-col">
            {faqs.map((f) => (
              <FAQItemComponent key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-card border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mb-10">
            <p className="eyebrow mb-3">Explore more</p>
            <h2 className="font-display text-2xl md:text-3xl">Related categories.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to={r.slug} className="block bg-background border border-border/60 hover:border-[#d2a960]/60 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#d2a960] font-semibold mb-2 block">
                  Explore Related
                </span>
                <h3 className="font-display text-base text-foreground font-semibold mb-2">{r.label}</h3>
                <span className="text-xs font-semibold text-primary">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK CTA BAR */}
      <section className="bg-forest text-ivory py-16 text-center border-t border-ivory/15">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow text-[#d2a960] mb-4">Ready when you are</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Book your consultation.</h2>
          <p className="text-sm text-ivory/70 max-w-md mx-auto mb-8">
            A specialist replies within 15 minutes during clinic hours — no pressure, just honest advice.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/971500999324" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-all">
              Book consultation
            </a>
            <a href="tel:+971500999324" className="rounded-lg border border-ivory/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              Call the clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
