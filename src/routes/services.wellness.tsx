import { createFileRoute, Link } from "@tanstack/react-router";
import wellnessImg from "@/assets/wellness.jpg";

export const Route = createFileRoute("/services/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness & Recovery — Lumière Clinic" },
      { name: "description", content: "IV therapy, lymphatic drainage, longevity and body sculpting programs at Lumière Clinic — restore balance from within." },
      { property: "og:title", content: "Wellness at Lumière" },
      { property: "og:description", content: "Holistic wellness, recovery and longevity programs." },
      { property: "og:image", content: wellnessImg },
    ],
  }),
  component: Wellness,
});

const programs = [
  { name: "IV nutrient therapy", body: "Tailored intravenous blends for energy, immunity, recovery or radiance.", time: "45 min" },
  { name: "Lymphatic drainage", body: "A specialised manual technique to reduce inflammation and sculpt contours.", time: "60 min" },
  { name: "Longevity assessment", body: "Comprehensive biomarker panel, body composition and a personalised plan.", time: "120 min" },
  { name: "Body sculpting", body: "Non-invasive radiofrequency, cryolipolysis and EMS technologies.", time: "45 – 60 min" },
  { name: "Sleep & stress reset", body: "Multi-modal sessions combining breathwork, red light and craniosacral therapy.", time: "75 min" },
  { name: "Postpartum recovery", body: "A gentle protocol for tissue, hormones and energy after childbirth.", time: "package" },
];

function Wellness() {
  return (
    <>
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img
          src={wellnessImg}
          alt="Wellness treatment room"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-20 lg:px-10">
          <p className="eyebrow text-ivory/80 mb-5">Service · 02</p>
          <h1 className="font-display text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
            Wellness & <em className="italic">Recovery.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ivory/85">
            Programs that restore balance from within — for energy, longevity
            and a body that feels like home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6">The approach</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Outside reflects <em className="italic">inside.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Lasting beauty depends on what is happening beneath the skin.
              Our wellness programs are built on diagnostics — sleep, stress,
              hormones, micronutrients — so every treatment serves a longer
              arc of vitality, not just a single appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="eyebrow mb-6">Programs</p>
          <h2 className="font-display text-4xl md:text-5xl">For energy, calm and longevity</h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border/70 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <article key={p.name} className="bg-background p-8">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.28em] text-accent">{p.time}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow mb-5">Membership</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The Lumière <em className="italic">circle.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A year-long program of seasonal assessments, monthly therapies
              and direct access to our medical team — designed for clients
              who treat wellbeing as a long practice.
            </p>
            <Link to="/contact" className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Request information
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10">
            <ul className="space-y-5 text-sm">
              {["Quarterly biomarker panel", "Monthly signature therapy", "Priority booking", "Personal wellness advisor", "Seasonal home protocols"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
