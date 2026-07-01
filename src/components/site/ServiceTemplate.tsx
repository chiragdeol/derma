import { Link } from "@tanstack/react-router";
import { useState } from "react";
import interiorImg from "@/assets/interior.jpg";

export type ServiceTreatment = {
  name: string;
  body: string;
  tags: string[];
  duration: string;
  price: string;
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
      <div className={`overflow-hidden transition-all duration-350 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-muted-foreground/95 leading-relaxed max-w-3xl">{answer}</p>
      </div>
    </div>
  );
};

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
              {h1.includes("Dubai") ? (
                <>
                  {h1.replace("Dubai", "")}
                  <em className="italic text-[#d2a960] font-light">Dubai</em>
                </>
              ) : (
                h1
              )}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/95 leading-relaxed max-w-xl mb-8">
              {intro}
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              <a href="https://wa.me/971543251817" className="rounded-lg bg-[#d2a960] text-black px-6 py-3.5 text-sm font-semibold hover:opacity-95 transition-all shadow-sm">
                Book a consultation
              </a>
              <a href="https://wa.me/971543251817" className="rounded-lg bg-[#1f6b53] px-6 py-3.5 text-sm font-semibold text-white hover:opacity-95 transition-all shadow-sm flex items-center gap-1.5">
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

      {/* TREATMENTS GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Treatments in {categoryName}</p>
            <h2 className="font-display text-3xl md:text-4xl">Everything under {categoryName}.</h2>
            <p className="mt-4 text-base text-muted-foreground/90">{txIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map((t) => (
              <article key={t.name} className="relative bg-card border border-border/60 hover:border-[#d2a960]/50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
                <div className="absolute left-0 top-8 bottom-8 w-0.5 bg-[#d2a960]/40" />
                <div>
                  <div className="flex justify-between items-baseline gap-4 mb-3">
                    <h3 className="font-display text-xl text-foreground font-semibold">{t.name}</h3>
                    <span className="font-display text-sm font-semibold text-primary">{t.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground/95 leading-relaxed mb-4">{t.body}</p>
                  <ul className="flex gap-1.5 flex-wrap mb-6">
                    {t.tags.map((tag) => (
                      <li key={tag} className="text-[10px] text-muted-foreground border border-border/70 px-2 py-0.5 rounded-full">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center border-t border-border/40 pt-4 mt-auto">
                  <span className="text-[11px] text-muted-foreground/80">{t.duration}</span>
                  <a href="https://wa.me/971543251817" className="text-xs font-semibold text-primary hover:text-foreground transition-colors">
                    Book →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                  <h3 className="font-display text-lg text-white mb-1">DHA &amp; MOH licensed</h3>
                  <p className="text-sm text-ivory/70 leading-relaxed">A fully accredited, safety-first clinic on Jumeirah Beach Road.</p>
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
            <a href="https://wa.me/971543251817" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-all">
              Book consultation
            </a>
            <a href="tel:+971543251817" className="rounded-lg border border-ivory/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              Call the clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
