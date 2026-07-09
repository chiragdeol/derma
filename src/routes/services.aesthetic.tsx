import { createFileRoute, Link } from "@tanstack/react-router";
import aestheticImg from "@/assets/aesthetic.jpg";

export const Route = createFileRoute("/services/aesthetic")({
  head: () => ({
    meta: [
      { title: "Aesthetic Medicine — Lumière Clinic" },
      { name: "description", content: "Injectables, advanced facials, laser and skin rejuvenation at Lumière Clinic Sharjah — natural, lasting results." },
      { property: "og:title", content: "Aesthetic Medicine at Lumière" },
      { property: "og:description", content: "Bespoke aesthetic treatments designed for natural harmony." },
      { property: "og:image", content: aestheticImg },
    ],
  }),
  component: Aesthetic,
});

const treatments = [
  { name: "Bespoke injectables", body: "Conservative, anatomically-driven enhancement using premium hyaluronic acids and neuromodulators.", time: "30 – 60 min" },
  { name: "Signature Lumière facial", body: "A multi-layer protocol combining cleansing, exfoliation, peptides and LED therapy.", time: "75 min" },
  { name: "Laser & light", body: "Fractional and pigment-specific lasers for tone, texture and clarity.", time: "45 – 90 min" },
  { name: "Skin boosters & polynucleotides", body: "Micro-injected hydration and regeneration for visible glow within days.", time: "30 min" },
  { name: "Chemical peels", body: "Customised acid blends to refine, brighten and even the complexion.", time: "45 min" },
  { name: "Mesotherapy", body: "Vitamin and amino-acid cocktails delivered directly into the dermis.", time: "30 min" },
];

const journey = [
  { step: "Consultation", body: "An unhurried conversation about your goals, skin history and lifestyle." },
  { step: "Diagnosis", body: "Skin analysis with imaging and a clear, written treatment plan." },
  { step: "Treatment", body: "Performed exclusively by our medical team using premium devices." },
  { step: "Aftercare", body: "Personalised products, follow-ups and seasonal maintenance plans." },
];

function Aesthetic() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={aestheticImg}
          alt="Aesthetic medicine at Lumière Clinic"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 lg:px-10">
          <p className="eyebrow text-ivory/80 mb-5">Service · 01</p>
          <h1 className="font-display text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
            Aesthetic <em className="italic">Medicine.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ivory/85">
            A measured, anatomical approach to enhancement — where less is
            almost always more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">The promise</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Refinement, never <em className="italic">replacement.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Our aesthetic protocols are built around the architecture of your
              face — restoring volume where time has taken it, softening where
              tension has built, and reawakening skin so it carries your
              expression with ease. The goal is never a different face. It is
              your face, rested.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="eyebrow mb-6">Treatments</p>
          <h2 className="font-display text-4xl md:text-5xl">A considered menu</h2>

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

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <p className="eyebrow mb-6">The journey</p>
        <h2 className="font-display text-4xl md:text-5xl">Four unhurried steps</h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((j, i) => (
            <div key={j.step}>
              <p className="font-display text-5xl text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 font-display text-2xl">{j.step}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary p-10 text-primary-foreground sm:p-14">
          <div>
            <p className="font-display text-3xl md:text-4xl">Ready to begin?</p>
            <p className="mt-2 text-sm opacity-80">Consultations are private and complimentary.</p>
          </div>
          <Link to="/contact" className="rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-foreground hover:opacity-90">
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
