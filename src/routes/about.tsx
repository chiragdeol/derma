import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Nemah Clinic" },
      { name: "description", content: "Discover Al Nemah Clinic: our philosophy, our team and the multidisciplinary approach behind every transformation." },
      { property: "og:title", content: "About Al Nemah Clinic" },
      { property: "og:description", content: "A multidisciplinary team united by craft, science and care." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

const values = [
  { num: "01", title: "Craft", body: "Every treatment is approached as a work of detail and discipline." },
  { num: "02", title: "Science", body: "Evidence-based protocols, advanced devices and continuous research." },
  { num: "03", title: "Care", body: "An unhurried experience built around the person, not the procedure." },
  { num: "04", title: "Discretion", body: "A private, considered sanctuary in the heart of Sharjah." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-20 lg:px-10">
        <p className="eyebrow mb-8">About Al Nemah</p>
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          A clinic built on <em className="italic">craft,</em><br />science and care.
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Al Nemah is a multidisciplinary aesthetic, laser and dental
          center where scientific expertise and a personalized approach help
          our clients improve their quality of life — from skin and silhouette
          to vitality and longevity.
        </p>
      </section>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={aboutImg}
                alt="Portrait reflecting Al Nemah aesthetic"
                loading="lazy"
                width={1400}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="eyebrow mb-5">Our philosophy</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Beauty supported by <em className="italic">medicine.</em>
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                We believe results should look effortless. That means choosing
                less when less is enough — and committing fully when more is
                needed. Our doctors collaborate across disciplines so each plan
                is considered from every angle.
              </p>
              <p>
                The Al Nemah experience is calm by design: a long welcome, an
                honest consultation and a clear, gradual plan. We move at the
                pace of your skin, your body and your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="mb-12">
          <p className="eyebrow mb-5">What guides us</p>
          <h2 className="font-display text-4xl md:text-5xl">Four quiet principles</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-border/70 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.num} className="bg-background p-10">
              <p className="font-display text-2xl text-accent">{v.num}</p>
              <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={interiorImg}
              alt="Treatment room at Al Nemah Clinic"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">The team</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Doctors, therapists and artisans of detail.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our practitioners are selected for both technical mastery and
              their bedside presence. Many trained across Europe and the
              Middle East, and all share the same standard: do less, do it
              beautifully, never compromise on safety.
            </p>
            <Link to="/contact" className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
