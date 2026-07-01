import { Link } from "@tanstack/react-router";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import treatmentRoomImg from "@/assets/treatment-room.jpg";
import treatmentHandsImg from "@/assets/treatment-hands.jpg";
import interiorImg from "@/assets/interior.jpg";

export type ServiceTreatment = { name: string; body: string; time: string };
export type ServiceStep = { step: string; body: string };
export type GalleryItem = { src: string; caption?: string; alt?: string };
export type BeforeAfterItem = { before: string; after: string; label: string; note?: string };

export type ServiceTemplateProps = {
  eyebrow: string;
  titleLead: string;
  titleItalic: string;
  heroSubtitle: string;
  heroImage: string;
  promiseEyebrow?: string;
  promiseTitleLead: string;
  promiseTitleItalic: string;
  promiseBody: string;
  treatmentsTitle: string;
  treatments: ServiceTreatment[];
  journey?: ServiceStep[];
  gallery?: GalleryItem[];
  beforeAfter?: BeforeAfterItem[];
  ctaTitle?: string;
  ctaBody?: string;
};

export function ServiceTemplate({
  eyebrow,
  titleLead,
  titleItalic,
  heroSubtitle,
  heroImage,
  promiseEyebrow = "The promise",
  promiseTitleLead,
  promiseTitleItalic,
  promiseBody,
  treatmentsTitle,
  treatments,
  journey,
  gallery,
  beforeAfter,
  ctaTitle = "Ready to begin?",
  ctaBody = "Consultations are private and complimentary.",
}: ServiceTemplateProps) {
  const galleryItems: GalleryItem[] =
    gallery ?? [
      { src: heroImage, caption: "Inside the treatment", alt: `${titleLead} ${titleItalic}` },
      { src: treatmentHandsImg, caption: "Precision and care", alt: "Doctor performing aesthetic treatment" },
      { src: treatmentRoomImg, caption: "Our private suites", alt: "Lumière treatment suite" },
      { src: interiorImg, caption: "The Lumière atelier", alt: "Lumière clinic interior" },
    ];

  const baItems: BeforeAfterItem[] =
    beforeAfter ?? [
      {
        before: beforeImg,
        after: afterImg,
        label: "Skin clarity & glow",
        note: "Result shown after a personalised course of treatment.",
      },
    ];

  return (
    <>
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={heroImage}
          alt={`${titleLead} ${titleItalic}`}
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 lg:px-10">
          <p className="eyebrow text-ivory/80 mb-5">{eyebrow}</p>
          <h1 className="font-display text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
            {titleLead} <em className="italic">{titleItalic}</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ivory/85">{heroSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">{promiseEyebrow}</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              {promiseTitleLead} <em className="italic">{promiseTitleItalic}</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">{promiseBody}</p>
          </div>
        </div>
      </section>

      {/* Gallery — before treatments */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">In the clinic</p>
              <h2 className="font-display text-3xl md:text-4xl">A closer look</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryItems.slice(0, 4).map((g, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt ?? g.caption ?? "Lumière clinic"}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {g.caption && (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-xs uppercase tracking-[0.22em] text-ivory">
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="eyebrow mb-6">Treatments</p>
          <h2 className="font-display text-4xl md:text-5xl">{treatmentsTitle}</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border/70 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <article key={t.name} className="bg-background p-8">
                <h3 className="font-display text-2xl">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.28em] text-accent">{t.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {journey && journey.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="eyebrow mb-6">The journey</p>
          <h2 className="font-display text-4xl md:text-5xl">A considered process</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <div key={j.step}>
                <p className="font-display text-5xl text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-2xl">{j.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Before / After — after improvement */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-32">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5">Before & after</p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                Real change, <em className="italic">measured</em> over time.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                Every result is photographed under identical lighting at fixed intervals,
                so the change you see is the change you can trust — never filtered,
                never retouched.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-12">
            {baItems.map((b, i) => (
              <div key={i} className="grid gap-6 md:grid-cols-2 md:gap-8">
                <figure className="relative overflow-hidden rounded-2xl">
                  <img
                    src={b.before}
                    alt={`${b.label} — before`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute left-4 top-4 rounded-full bg-foreground/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-ivory">
                    Before
                  </figcaption>
                </figure>
                <figure className="relative overflow-hidden rounded-2xl">
                  <img
                    src={b.after}
                    alt={`${b.label} — after`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                  <figcaption className="absolute left-4 top-4 rounded-full bg-accent px-4 py-1.5 text-[11px] uppercase tracking-[0.28em] text-accent-foreground">
                    After
                  </figcaption>
                </figure>
                <div className="md:col-span-2">
                  <p className="font-display text-2xl">{b.label}</p>
                  {b.note && (
                    <p className="mt-2 text-sm text-muted-foreground">{b.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary p-10 text-primary-foreground sm:p-14">
          <div>
            <p className="font-display text-3xl md:text-4xl">{ctaTitle}</p>
            <p className="mt-2 text-sm opacity-80">{ctaBody}</p>
          </div>
          <Link to="/contact" className="rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-foreground hover:opacity-90">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
