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
    </>
  );
}
