import { createFileRoute, Link } from "@tanstack/react-router";
import injectables from "@/assets/service-injectables.jpg";
import skin from "@/assets/service-skin.jpg";
import laser from "@/assets/service-laser.jpg";
import lifting from "@/assets/service-lifting.jpg";
import surgery from "@/assets/service-surgery.jpg";
import wellness from "@/assets/wellness.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Al Nemah Clinic Sharjah" },
      { name: "description", content: "Dermatology, injectables, laser, lifting, plastic surgery and wellness — six disciplines under one Sharjah roof." },
      { property: "og:title", content: "Services at Al Nemah Clinic" },
      { property: "og:description", content: "Six disciplines under one roof, led by board-certified doctors." },
    ],
  }),
  component: ServicesIndex,
});

const services = [
  { num: "01", to: "/services/injectables", title: "Cosmetic Injectables", body: "Botox, fillers, Profhilo and lip enhancement — subtle, anatomical results.", image: injectables },
  { num: "02", to: "/services/skin", title: "Skin & HydraFacial", body: "Medical-grade facials, peels and resurfacing for luminous skin.", image: skin },
  { num: "03", to: "/services/laser", title: "Laser & Hair Removal", body: "Multi-wavelength laser platforms safe across all skin types.", image: laser },
  { num: "04", to: "/services/lifting", title: "Anti-Aging & Lifting", body: "Morpheus8, Ultherapy, threads and Fotona 4D for non-surgical lift.", image: lifting },
  { num: "05", to: "/services/surgery", title: "Plastic Surgery", body: "Board-certified surgeons for considered, beautifully natural results.", image: surgery },
  { num: "06", to: "/services/wellness", title: "Wellness & Longevity", body: "IV drips, hormone health, hair restoration and skin boosters.", image: wellness },
] as const;

function ServicesIndex() {
  return (
    <>
      <section className="bg-secondary/30 pt-36 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="eyebrow mb-6">Our services</p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
            Six disciplines, <em className="italic">one philosophy.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            From a single HydraFacial to a full surgical plan, every Lumière service follows
            the same standard: physician-led, evidence-based, and quietly luxurious.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.num} to={s.to} className="group block">
              <div className="overflow-hidden rounded-2xl bg-card">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <p className="eyebrow text-muted-foreground">{s.num}</p>
                <h2 className="mt-3 font-display text-3xl text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <span className="mt-5 inline-flex items-center text-sm text-foreground underline-offset-8 group-hover:underline">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
