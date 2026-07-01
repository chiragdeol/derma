import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import injectablesImg from "@/assets/service-injectables.jpg";
import skinImg from "@/assets/service-skin.jpg";
import laserImg from "@/assets/service-laser.jpg";
import liftingImg from "@/assets/service-lifting.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";
import wellnessImg from "@/assets/wellness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Nemah Clinic — Where Advanced Medicine Meets Aesthetic Artistry" },
      { name: "description", content: "Thoughtfully designed aesthetic, laser and dental treatments in Dubai. Natural, refined results from a multidisciplinary clinic." },
      { property: "og:title", content: "Al Nemah Clinic" },
      { property: "og:description", content: "Where advanced medicine meets aesthetic artistry." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    title: "Excellence in every detail",
    body: "Lumière Clinic is a multidisciplinary aesthetic, plastic surgery and wellness center where scientific expertise and a personalized approach guide every transformation.",
  },
  {
    title: "Health and beauty 360",
    body: "Our 360-degree approach provides comprehensive care. We celebrate diversity by creating a space that respects each client's definition of beauty.",
  },
  {
    title: "Luxury interiors",
    body: "Soft curves, warm lighting and a soothing atmosphere — a space designed to put you at ease, because true beauty begins with how you feel.",
  },
  {
    title: "A signature experience",
    body: "Each client is an individual story. Each transformation is life-changing, and we ensure it brings pure joy from the first consultation onward.",
  },
];

const services = [
  { num: "01", title: "Cosmetic Injectables", image: injectablesImg, tags: ["Botox", "Fillers", "Profhilo", "Lip enhancement"], body: "Subtle, natural movement — softening lines and restoring balance.", to: "/services/injectables", cta: "Explore injectables" },
  { num: "02", title: "Skin & HydraFacial", image: skinImg, tags: ["HydraFacial", "Chemical peels", "Mesotherapy", "Microneedling"], body: "Medical-grade facials and resurfacing for clear, luminous skin.", to: "/services/skin", cta: "Explore skin" },
  { num: "03", title: "Laser & Hair Removal", image: laserImg, tags: ["Laser hair", "Pigmentation", "Vascular", "Tattoo removal"], body: "Advanced laser platforms, safe across all Fitzpatrick skin types.", to: "/services/laser", cta: "Explore laser" },
  { num: "04", title: "Anti-Aging & Lifting", image: liftingImg, tags: ["Morpheus8", "Ultherapy", "Threads", "Fotona 4D"], body: "Non-surgical tightening and collagen renewal with real downtime answers.", to: "/services/lifting", cta: "Explore lifting" },
  { num: "05", title: "Plastic Surgery", image: surgeryImg, tags: ["Rhinoplasty", "Liposuction", "Eyelid surgery", "Breast"], body: "Board-certified surgeons for considered, beautifully natural results.", to: "/services/surgery", cta: "Explore surgery" },
  { num: "06", title: "Wellness & Longevity", image: wellnessImg, tags: ["IV drips", "Hormone health", "Hair restoration", "Skin boosters"], body: "Feel as good as you look — inside-out care for energy and vitality.", to: "/services/wellness", cta: "Explore wellness" },
] as const;

const doctors = [
  { name: "Dr. Layla Haddad", role: "Medical Director · Dermatology", credentials: "MD, FAAD — 15+ years", image: doctor1 },
  { name: "Dr. Adrien Moreau", role: "Aesthetic & Laser Medicine", credentials: "MD, EBCD — Paris trained", image: doctor2 },
  { name: "Dr. Noor Khalil", role: "Plastic & Reconstructive Surgery", credentials: "MD, FRCS — London board", image: doctor3 },
];

const testimonials = [
  { quote: "I've never felt more myself. The team listens — nothing is rushed, nothing overdone.", name: "Amina R.", detail: "HydraFacial · Profhilo" },
  { quote: "Refined, discreet, and deeply professional. The results look like me, just rested.", name: "Sophie L.", detail: "Injectables · Morpheus8" },
  { quote: "From the consultation to follow-up, every detail felt considered. A true sanctuary.", name: "Maya K.", detail: "Laser · Skin boosters" },
];

function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Cosmetic injectables (Botox / Fillers)",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Al Nemah Clinic, I'd like to request a consultation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AArea of Interest: ${form.service}`;
    window.open(`https://wa.me/971543251817?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-background overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Soft watermark background image */}
        <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Heading and Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="eyebrow text-primary font-semibold mb-4 tracking-[0.25em]">Aesthetic Medicine · Dubai</p>
              <h1 className="font-display text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                Aesthetic medicine<br />
                in Dubai, refined by <span className="italic font-light text-primary">artistry.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
                Doctor-led injectables, skin, laser and surgical care — designed around natural, lasting results and a calm, considered experience.
              </p>
              
              {/* Stats Grid */}
              <div className="mt-12 pt-8 border-t border-border/60 flex flex-wrap items-center gap-x-10 gap-y-6">
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">4.9★</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">1,280 reviews</p>
                </div>
                <div className="w-[1px] h-10 bg-border/60 hidden sm:block"></div>
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">14</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">years in dubai</p>
                </div>
                <div className="w-[1px] h-10 bg-border/60 hidden sm:block"></div>
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">40k+</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">treatments</p>
                </div>
                <div className="w-[1px] h-10 bg-border/60 hidden sm:block"></div>
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">DHA</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">licensed doctors</p>
                </div>
              </div>
            </div>
            
            {/* Right Column: Inquiry Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-background rounded-2xl border border-border/80 p-8 shadow-xl relative z-10 max-w-md mx-auto lg:mr-0">
                <h2 className="font-display text-2xl text-foreground mb-1">Request your consultation</h2>
                <p className="text-[11px] text-muted-foreground tracking-wide font-light mb-6">A specialist replies within 15 minutes during clinic hours.</p>
                
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1.5 pl-0.5">Full name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1.5 pl-0.5">Mobile number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+971 5X XXX XXXX"
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-light"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1.5 pl-0.5">Area of interest</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full rounded-lg border border-border/80 bg-background/50 px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-light appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option>Cosmetic injectables (Botox / Fillers)</option>
                      <option>Skin & HydraFacial</option>
                      <option>Laser & Hair Removal</option>
                      <option>Anti-Aging & Lifting</option>
                      <option>Plastic Surgery</option>
                      <option>Wellness & Longevity</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-2 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Request consultation →
                  </button>
                  
                  <div className="relative flex py-2 items-center justify-center">
                    <div className="flex-grow border-t border-border/60"></div>
                    <span className="flex-shrink mx-4 text-[9px] uppercase tracking-widest text-muted-foreground/80 font-light">or reply faster on</span>
                    <div className="flex-grow border-t border-border/60"></div>
                  </div>
                  
                  <a
                    href="https://wa.me/971543251817"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-lg bg-[#125e46] py-3 text-sm font-medium text-white hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.364a9.994 9.994 0 0 0 4.81 1.233c5.505 0 9.99-4.477 9.99-9.985C22.002 6.478 17.518 2 12.012 2zm0 18.29a8.27 8.27 0 0 1-4.222-1.155l-.304-.18-3.136.82.834-3.056-.198-.314A8.273 8.273 0 0 1 3.72 11.98c0-4.57 3.719-8.285 8.297-8.285 4.574 0 8.29 3.717 8.29 8.288 0 4.57-3.714 8.29-8.29 8.29-.003 0-.003 0 0 0z"/>
                    </svg>
                    WhatsApp the clinic
                  </a>
                  
                  <p className="text-[10px] text-center text-muted-foreground/80 mt-4 tracking-wide font-light flex items-center justify-center gap-1">
                    <svg className="w-3 h-3 text-muted-foreground/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    Your details stay private. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ABOUT US (INTERIOR SHOWCASE) */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={interiorImg}
              alt="Clinic interior with soft warm lighting"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[5/6] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="eyebrow mb-6">About Al Nemah</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Where advanced medicine meets <em className="italic">aesthetic artistry</em>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Al Nemah is a multidisciplinary aesthetic, laser and dental center where 
              scientific expertise and a personalized approach guide every transformation. 
              Our clinic offers an environment where science, artistry and care work as one 
              to deliver natural, refined results.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-foreground underline-offset-8 hover:underline"
            >
              Discover our story →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl">
                Dermatology, refined into <em className="italic">an experience</em>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Six disciplines under one roof — medical-grade skin, injectables, laser,
              lifting, surgery and longevity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.num}
                to={s.to}
                className="group flex flex-col overflow-hidden rounded-2xl bg-background shadow-soft transition-transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-xs uppercase tracking-[0.22em] text-foreground backdrop-blur-sm">
                    {s.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <span className="mt-auto pt-6 inline-flex items-center text-sm text-foreground underline-offset-8 group-hover:underline">
                    {s.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL OFFERS */}
      <section id="offers" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14">
            <p className="eyebrow mb-4 text-primary font-semibold">Current Offers</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Seasonal packages, <em className="italic">thoughtfully priced</em>.
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Offer 1 */}
            <div className="bg-background rounded-2xl border border-border/60 p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <span className="absolute top-4 right-4 bg-[#c2a476]/15 text-[#91713d] text-[10px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                Save 30%
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground mt-4 mb-1">HydraFacial Trio</h3>
                <p className="text-[11px] text-muted-foreground tracking-wide font-light mb-6">Valid until 30 Sept 2026</p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-sm text-muted-foreground line-through">AED 1,500</span>
                  <span className="text-2xl font-display font-medium text-foreground font-semibold">AED 1,050</span>
                </div>
              </div>
              <a
                href="https://wa.me/971543251817?text=Hi,%20I'd%20like%20to%20claim%20the%20HydraFacial%20Trio%20offer."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-lg border border-border py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all cursor-pointer"
              >
                Claim offer
              </a>
            </div>

            {/* Offer 2 */}
            <div className="bg-background rounded-2xl border border-border/60 p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <span className="absolute top-4 right-4 bg-[#c2a476]/15 text-[#91713d] text-[10px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                Popular
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground mt-4 mb-1">Lips + Botox Combo</h3>
                <p className="text-[11px] text-muted-foreground tracking-wide font-light mb-6">Valid until 30 Sept 2026</p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-sm text-muted-foreground line-through">AED 2,400</span>
                  <span className="text-2xl font-display font-medium text-foreground font-semibold">AED 1,900</span>
                </div>
              </div>
              <a
                href="https://wa.me/971543251817?text=Hi,%20I'd%20like%20to%20claim%20the%20Lips%20%2B%20Botox%20Combo%20offer."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-lg border border-border py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all cursor-pointer"
              >
                Claim offer
              </a>
            </div>

            {/* Offer 3 */}
            <div className="bg-background rounded-2xl border border-border/60 p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow">
              <span className="absolute top-4 right-4 bg-[#c2a476]/15 text-[#91713d] text-[10px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                New
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground mt-4 mb-1">Morpheus8 — 3 Sessions</h3>
                <p className="text-[11px] text-muted-foreground tracking-wide font-light mb-6">Valid until 30 Sept 2026</p>
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-sm text-muted-foreground line-through">AED 6,000</span>
                  <span className="text-2xl font-display font-medium text-foreground font-semibold">AED 4,200</span>
                </div>
              </div>
              <a
                href="https://wa.me/971543251817?text=Hi,%20I'd%20like%20to%20claim%20the%20Morpheus8%203%20Sessions%20offer."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-lg border border-border py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-all cursor-pointer"
              >
                Claim offer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Meet the team</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Board-certified <em className="italic">specialists</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A multidisciplinary team — trained across Paris, London and the GCC — collaborating
            on every plan.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((d) => (
            <article key={d.name} className="group">
              <div className="overflow-hidden rounded-2xl bg-card">
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-display text-2xl text-foreground">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.role}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  {d.credentials}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="results" className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">In their words</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Care our clients <em className="italic">return for</em>.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-2xl bg-background p-8 shadow-soft sm:p-10"
              >
                <blockquote className="font-display text-2xl leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-border/60 pt-5">
                  <p className="text-sm text-foreground">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="journal" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Our Journal</p>
              <h2 className="font-display text-4xl md:text-5xl">
                Insights and guidance on <em className="italic">healthy skin</em>.
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground underline-offset-8 hover:underline"
            >
              View all articles →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Blog Post 1 */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/40 shadow-sm transition-transform hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={skinImg}
                  alt="Medical facial treatment"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-102"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between text-xs text-muted-foreground/80 mb-3 tracking-wider uppercase font-light">
                  <span>Skin Health</span>
                  <span>July 1, 2026</span>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  Understanding Medical-Grade Facials: The HydraFacial Difference
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  Why superficial skincare isn't enough, and how multi-step medical protocols restore skin health at a cellular level.
                </p>
                <span className="mt-6 inline-flex items-center text-sm text-foreground underline-offset-8 group-hover:underline pt-4 border-t border-border/40">
                  Read article →
                </span>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/40 shadow-sm transition-transform hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={injectablesImg}
                  alt="Cosmetic injectables details"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-102"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between text-xs text-muted-foreground/80 mb-3 tracking-wider uppercase font-light">
                  <span>Injectables</span>
                  <span>June 24, 2026</span>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  Cosmetic Injectables: The Art of Subtle Rejuvenation
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  How our board-certified specialists use advanced mapping to achieve soft, natural movement rather than a frozen look.
                </p>
                <span className="mt-6 inline-flex items-center text-sm text-foreground underline-offset-8 group-hover:underline pt-4 border-t border-border/40">
                  Read article →
                </span>
              </div>
            </article>

            {/* Blog Post 3 */}
            <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/40 shadow-sm transition-transform hover:-translate-y-1">
              <div className="overflow-hidden">
                <img
                  src={liftingImg}
                  alt="Morpheus8 tightning session"
                  loading="lazy"
                  width={800}
                  height={500}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-102"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center justify-between text-xs text-muted-foreground/80 mb-3 tracking-wider uppercase font-light">
                  <span>Technology</span>
                  <span>June 15, 2026</span>
                </div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  Non-Surgical Lifting: Is Morpheus8 Right For You?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  A comprehensive guide to RF microneedling, what to expect during recovery, and timeline for optimal results.
                </p>
                <span className="mt-6 inline-flex items-center text-sm text-foreground underline-offset-8 group-hover:underline pt-4 border-t border-border/40">
                  Read article →
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECOND OPINION CTA */}
      <section className="bg-primary text-ivory">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="eyebrow text-accent mb-6">Begin your consultation</p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">
            Your face deserves a second opinion <br className="hidden sm:inline" />
            <em className="italic font-light">worth trusting.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white/80">
            Book a private consultation with one of our doctors. No pressure, no obligation — just honest, expert guidance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/971543251817"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#526452] px-6 py-3 text-sm font-medium text-white hover:bg-[#5d705d] transition-all shadow-sm cursor-pointer"
            >
              Book consultation
            </a>
            <a
              href="https://wa.me/971543251817"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#184d3e] px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.364a9.994 9.994 0 0 0 4.81 1.233c5.505 0 9.99-4.477 9.99-9.985C22.002 6.478 17.518 2 12.012 2zm0 18.29a8.27 8.27 0 0 1-4.222-1.155l-.304-.18-3.136.82.834-3.056-.198-.314A8.273 8.273 0 0 1 3.72 11.98c0-4.57 3.719-8.285 8.297-8.285 4.574 0 8.29 3.717 8.29 8.288 0 4.57-3.714 8.29-8.29 8.29-.003 0-.003 0 0 0z"/>
              </svg>
              WhatsApp us
            </a>
            <a
              href="tel:+97140000000"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Call the clinic
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
