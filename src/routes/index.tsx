import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import aboutImg from "@/assets/about.jpg";
import doctorSidra from "@/assets/doctor-sidra.png";
import doctorNisha from "@/assets/doctor-nisha.png";
import doctorHijab from "@/assets/doctor-hijab.png";
import doctorMale from "@/assets/doctor-male.png";
import injectablesImg from "@/assets/service-injectables.jpg";
import skinImg from "@/assets/service-skin.jpg";
import laserImg from "@/assets/service-laser.jpg";
import liftingImg from "@/assets/service-lifting.jpg";
import dentalImg from "@/assets/service-dental.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al Nemah Clinic — Where Advanced Medicine Meets Aesthetic Artistry" },
      { name: "description", content: "Thoughtfully designed aesthetic, laser and dental treatments in Sharjah. Natural, refined results from a multidisciplinary clinic." },
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
    body: "Al Nemah Clinic is a multidisciplinary aesthetic, laser and dental center where scientific expertise and a personalized approach guide every transformation.",
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
  { num: "05", title: "Dental Services", image: dentalImg, tags: ["Smile design", "Veneers", "Teeth whitening", "Implants"], body: "Comprehensive dental care, cosmetic smile design and whitening for your ultimate confidence.", to: "/services/dental/cosmetic-dentistry", cta: "Explore dental" },
  { num: "06", title: "Wellness & Longevity", image: wellnessImg, tags: ["IV drips", "Hormone health", "Hair restoration", "Skin boosters"], body: "Feel as good as you look — inside-out care for energy and vitality.", to: "/services/wellness", cta: "Explore wellness" },
] as const;

const doctors = [
  { name: "Dr. Sidra Ejaz", role: "Aesthetic Physician", image: doctorSidra },
  { name: "Dr. Nisha Sasidharan", role: "General Dentist", image: doctorNisha },
  { name: "Dr. Menna", role: "General Dentist", image: doctorHijab },
  { name: "Dr. Sheeraz", role: "Specialist Dermatologist", image: doctorMale },
];

const googleMapsUrl = "https://www.google.com/maps/place/Al+Nemah+Medical+Center/@25.3084187,55.4554462,17z/data=!3m1!4b1!4m6!3m5!1s0x3ef5f55f108d6609:0x7c63cba5d1ec1b67!8m2!3d25.3084187!4d55.4554462!16s%2Fg%2F11z4f4shbh!18m1!1e1?entry=ttu";

const testimonials = [
  {
    quote: "Dr. Sidra is an absolute artist! She took her time explaining the procedure and made me feel so comfortable. The results look so natural and effortless.",
    name: "Fatima Al-Zahra",
    detail: "Aesthetic Medicine · Dr. Sidra Ejaz",
    rating: 5,
    date: "1 week ago"
  },
  {
    quote: "Best dental experience in Sharjah! Dr. Nisha and Dr. Menna are extremely gentle and skilled. Got my teeth whitening and smile design done with zero discomfort.",
    name: "Mariam Al-Ali",
    detail: "Teeth Whitening & Dental Care",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    quote: "The GentleMax Pro laser hair removal platform here is top notch. Smooth, quick, and virtually painless. Super clean clinic and professional staff!",
    name: "Sara K.",
    detail: "Laser & Hair Removal",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    quote: "Dr. Sheeraz gave me honest, expert guidance for my skin routine. The results within a month have been transformative. Truly a 5-star medical center.",
    name: "Hessa M.",
    detail: "Specialist Dermatology · Dr. Sheeraz",
    rating: 5,
    date: "1 month ago"
  },
  {
    quote: "HydraFacial treatment at Al Nemah is purely therapeutic. My skin has never looked so clear and glowing. The luxury ambiance is unmatched in Sharjah.",
    name: "Noor Al-Hassan",
    detail: "HydraFacial & Skin Resurfacing",
    rating: 5,
    date: "1 month ago"
  },
  {
    quote: "Modern clinic with exceptional doctors. Having dermatology, laser and dental specialists under one roof in Sharjah makes all care so convenient.",
    name: "Reem S.",
    detail: "Dental & Skin Consultation",
    rating: 5,
    date: "2 months ago"
  },
];

const BeforeAfterSlider = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button held down
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-square w-full select-none overflow-hidden rounded-2xl border border-border/50 shadow-lg cursor-ew-resize"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* Before Image */}
      <img 
        src={beforeImg} 
        alt="Before treatment"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute bottom-4 left-4 z-10 rounded bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white">
        Before
      </span>

      {/* After Image (Clipped dynamically) */}
      <img 
        src={afterImg} 
        alt="After treatment"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        draggable={false}
      />
      <span className="absolute bottom-4 right-4 z-10 rounded bg-[#d2a960] px-3 py-1 text-xs uppercase tracking-wider text-black font-semibold">
        After
      </span>

      {/* Slider Bar & Handle */}
      <div 
        className="absolute bottom-0 top-0 w-0.5 bg-white/80"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-md border border-border hover:scale-105 transition-transform pointer-events-none">
          <svg className="h-5 w-5 text-muted-foreground rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Cosmetic injectables (Botox / Fillers)",
  });
  const [sent, setSent] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Al Nemah Clinic, I'd like to request a consultation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AArea of Interest: ${form.service}`;
    window.open(`https://wa.me/971500999324?text=${text}`, "_blank");
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
              <p className="eyebrow text-primary font-semibold mb-4 tracking-[0.25em]">SKIN · LASER · DENTAL - SHARJAH</p>
              <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
                Skin, laser and dental care in Sharjah,<br />
                refined by <span className="italic font-bold text-primary">precision.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-black font-semibold">
                Doctor-led skin, laser and dental treatments — designed around natural, comfortable results and a calm, considered experience.
              </p>
              
              {/* Stats Grid */}
              <div className="mt-12 pt-8 border-t border-border/60 flex flex-wrap items-center gap-x-10 gap-y-6">
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">50+</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">Reviews</p>
                </div>
                <div className="w-[1px] h-10 bg-border/60 hidden sm:block"></div>
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">10k+</p>
                  <p className="text-[10px] font-sans font-semibold tracking-wider text-muted-foreground uppercase mt-1">treatments</p>
                </div>
                <div className="w-[1px] h-10 bg-border/60 hidden sm:block"></div>
                <div>
                  <p className="font-display text-3xl font-normal text-foreground">SOH</p>
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
                      <option>Dental Care & Smile Design</option>
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
                    href="https://wa.me/971500999324"
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

      {/* ABOUT US (RECEPTION SHOWCASE) */}
      <section className="bg-[#FAF7F2] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl shadow-sm border border-border/40">
                <img
                  src={aboutImg}
                  alt="Al Nemah Medical Center reception desk and wood paneling interior"
                  loading="lazy"
                  width={1024}
                  height={682}
                  className="aspect-[4/3] sm:aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            {/* Content Column */}
            <div className="lg:col-span-6 lg:py-4">
              <p className="eyebrow mb-4 tracking-[0.25em] text-[11px] uppercase text-muted-foreground font-medium">ABOUT AL NEMAH</p>
              <h2 className="font-display text-4xl leading-[1.15] text-foreground md:text-5xl lg:text-6xl">
                Where dentistry and dermatology meet <em className="italic font-serif">modern artistry</em>.
              </h2>
              <p className="mt-6 text-sm md:text-base leading-relaxed text-foreground/90 font-medium">
                <strong className="font-semibold text-foreground">AL Nemah</strong> is a modern aesthetic clinic in the UAE, bringing together dental excellence and dermatological expertise under one roof. From precision smile design to advanced skin treatments, our specialists blend clinical science with an artist's eye to deliver results that look effortless and feel transformative.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground underline-offset-8 hover:underline"
              >
                Discover our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl">
                Dentistry and dermatology, refined into <em className="italic">an experience</em>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-black font-semibold">
              Six disciplines under one roof — smile design, medical-grade skin, injectables, laser, lifting and dental care.
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

      {/* BEFORE / AFTER COMPARISON */}
      <section className="bg-forest text-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow mb-6 text-primary">Real Results</p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                See the transformation. <br className="hidden sm:inline" />
                Drag to compare.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white font-semibold">
                Every image is a real AL Nemah patient, shown with written consent. Results vary from person to person — your consultation gives you honest, personalized expectations.
              </p>
              <p className="mt-8 text-xs tracking-wider uppercase opacity-60">
                Slide the handle to compare
              </p>
            </div>
            <div>
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* SEASONAL OFFERS */}
      <section id="offers" className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4 text-primary font-semibold">Special Packages</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Featured clinic packages, <em className="italic">thoughtfully priced</em>.
            </h2>
            <p className="text-base text-black font-semibold leading-relaxed">
              Exclusive medical aesthetics and dental treatment combinations available now at Al Nemah Clinic.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Package 1: Advance Hair Regeneration */}
            <div className="bg-background rounded-2xl border border-[#d2a960]/40 p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md hover:border-[#d2a960] transition-all">
              <span className="absolute top-4 right-4 bg-[#c2a476]/15 text-[#91713d] text-[10px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                Special Offer
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d2a960] font-semibold mb-2">Advance Hair Regeneration</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 font-semibold">PRP + Biotin + GFC + Exosome</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 font-medium">
                  Four Powerful Solutions. One Transformative Result.
                </p>
                
                <div className="bg-muted/30 rounded-xl p-4 mb-6 border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium">Package Price</span>
                      <span className="text-3xl font-display font-semibold text-foreground">AED 999 <small className="text-sm font-normal text-muted-foreground">Only</small></span>
                    </div>
                    <span className="text-[10px] bg-white border border-border px-2.5 py-1 rounded text-muted-foreground font-medium">Tabby / Tamara available</span>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/971500999324?text=Hi,%20I'd%20like%20to%20book%20the%20Advance%20Hair%20Regeneration%20Package%20(PRP%20%2B%20Biotin%20%2B%20GFC%20%2B%20Exosome)%20for%20AED%20999."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-lg bg-primary py-3.5 text-sm font-semibold text-black hover:opacity-90 transition-all cursor-pointer shadow-sm"
              >
                Claim Package via WhatsApp
              </a>
            </div>

            {/* Package 2: Teeth Whitening + Cleaning + Polishing + Free HydraFacial */}
            <div className="bg-background rounded-2xl border border-[#d2a960]/40 p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md hover:border-[#d2a960] transition-all">
              <div className="flex items-center gap-2 absolute top-4 right-4">
                <span className="bg-red-500/10 text-red-600 text-[10px] font-sans font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                  + Free HydraFacial
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d2a960] font-semibold mb-2">Teeth & Skin Combo</p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 font-semibold leading-snug">Teeth Whitening + Cleaning + Polishing</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-medium">
                  A Brighter Smile & Radiant Skin in One Visit!
                </p>
                <p className="text-[10px] text-amber-800 bg-amber-50 rounded px-2.5 py-1 inline-block font-semibold mb-6 border border-amber-200">
                  *Valid for First Time Patients Only
                </p>
                
                <div className="bg-muted/30 rounded-xl p-4 mb-6 border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block font-medium">Package Price</span>
                      <span className="text-3xl font-display font-semibold text-foreground">AED 799 <small className="text-sm font-normal text-muted-foreground">Only</small></span>
                    </div>
                    <span className="text-[10px] bg-white border border-border px-2.5 py-1 rounded text-muted-foreground font-medium">Tabby / Tamara available</span>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/971500999324?text=Hi,%20I'd%20like%20to%20book%20the%20Teeth%20Whitening%20%2B%20Cleaning%20%2B%20Polishing%20%2B%20Free%20HydraFacial%20Package%20for%20AED%20799."
                target="_blank"
                rel="noreferrer"
                className="w-full text-center rounded-lg bg-primary py-3.5 text-sm font-semibold text-black hover:opacity-90 transition-all cursor-pointer shadow-sm"
              >
                Claim Package via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Meet the team</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Board-certified <em className="italic">specialists</em>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-black font-semibold">
            A multidisciplinary team of dentists and dermatologists — collaborating so your smile and skin plans work in harmony.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS & GOOGLE REVIEWS */}
      <section id="results" className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4 text-primary font-semibold">Real Google Reviews · Sharjah</p>
              <h2 className="font-display text-4xl md:text-5xl">
                Care our patients <em className="italic">trust &amp; recommend</em>.
              </h2>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-muted/50 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>5.0 ★★★★★ on Google Maps</span>
              <span className="text-muted-foreground">→</span>
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-2xl bg-background p-8 shadow-soft transition-all duration-300 hover:shadow-md border border-border/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-wider">{t.date}</span>
                  </div>
                  <blockquote className="text-sm md:text-base leading-relaxed text-foreground font-medium">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-border/50 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="mt-0.5 text-xs text-primary font-medium">
                      {t.detail}
                    </p>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Verified Google Review"
                    className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>Google</span>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM REELS & VIDEO STORIES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">Visual Journeys</p>
              <h2 className="font-display text-4xl md:text-5xl">
                Client stories &amp; <em className="italic">reels</em>.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/alnemahaesthetics/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-foreground underline-offset-8 hover:underline"
            >
              Follow on Instagram →
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "A Happy Patient is the Best Compliment",
                category: "Patient Story",
                views: "14.2k views",
                cover: aboutImg,
                video: "/videos/video1.mp4"
              },
              {
                title: "Happy Patient After Her Laser Session",
                category: "Laser Results",
                views: "19.8k views",
                cover: laserImg,
                video: "/videos/video2.mp4"
              },
              {
                title: "Your Smile is Our Greatest Success",
                category: "Dental & Smile",
                views: "16.5k views",
                cover: dentalImg,
                video: "/videos/video3.mp4"
              }
            ].map((reel, idx) => (
              <div
                key={idx}
                onClick={() => setActiveVideoUrl(reel.video)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border/40 shadow-sm aspect-[9/16] transition-transform hover:-translate-y-1"
              >
                {/* Auto Play Video Without Sound */}
                <video
                  src={reel.video}
                  poster={reel.cover}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 transition-opacity group-hover:opacity-90 pointer-events-none" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 flex items-center justify-between w-[calc(100%-2rem)] z-10">
                  <span className="rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {reel.category}
                  </span>
                  <span className="text-[10px] text-white/80 tracking-wide">
                    {reel.views}
                  </span>
                </div>

                {/* Mute Indicator / Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all group-hover:bg-[#d2a960] group-hover:text-black group-hover:scale-110 shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="font-display text-xl leading-snug">{reel.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mt-2 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 stroke-white/60 fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    @alnemahaesthetics
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO MODAL LIGHTBOX */}
      {activeVideoUrl && (
        <div
          onClick={() => setActiveVideoUrl(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-all"
        >
          <button
            onClick={() => setActiveVideoUrl(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:scale-110 transition-transform p-2 bg-white/10 rounded-full"
            aria-label="Close video player"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl overflow-hidden aspect-[9/16] bg-black shadow-2xl"
          >
            <video
              autoPlay
              controls
              loop
              playsInline
              src={activeVideoUrl}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* SECOND OPINION CTA */}
      <section className="bg-primary text-ivory">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-10">
          <p className="eyebrow text-accent mb-6">Begin your consultation</p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl text-balance max-w-3xl mx-auto">
            Your face and smile deserve <br className="hidden sm:inline" />
            a second opinion <em className="italic font-light">worth trusting.</em>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-white font-semibold">
            Book a Free consultation with one of our doctors. No pressure, no obligation — just honest, expert guidance.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://wa.me/971500999324"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#526452] px-6 py-3 text-sm font-medium text-white hover:bg-[#5d705d] transition-all shadow-sm cursor-pointer"
            >
              Book consultation
            </a>
            <a
              href="https://wa.me/971500999324"
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
              href="tel:+971500999324"
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
