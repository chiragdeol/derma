import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Check, Play, Phone, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/service-laser.jpg";
import suitabilityImg from "@/assets/new-laser-1.jpg";

export const Route = createFileRoute("/services/laser/hair-removal")({
  head: () => ({
    meta: [
      { title: "Laser Hair Removal in Sharjah | Safe All Skin Tones — Al Nemah" },
      { name: "description", content: "Advanced laser hair removal in Sharjah (New Muweilah) — safe for dark, brown & light skin tones. Fast, virtually painless sessions. Free consultation." },
      { property: "og:title", content: "Laser Hair Removal at Al Nemah" },
      { property: "og:description", content: "Advanced laser platforms for lasting hair reduction. Calibrated safely for all skin tones." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LaserHairRemovalLanding,
});

function LaserHairRemovalLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "Full body",
    consent: false,
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.9;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;
      const percentage = scrollLeft / maxScroll;
      setActiveDot(Math.round(percentage * 2));
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollTo({
        left: (pageIndex / 2) * maxScroll,
        behavior: 'smooth',
      });
    }
  };

  const galleryItems = [
    { area: "Underarms", sessions: "6 sessions", before: "linear-gradient(160deg,#B2A995,#7A7260 80%,#544F40)", after: "linear-gradient(160deg,#F2E9D9,#D0BEA1 70%,#B6A284)" },
    { area: "Legs", sessions: "7 sessions", before: "linear-gradient(160deg,#AFA894,#77705E 80%,#524D3F)", after: "linear-gradient(160deg,#EFE5D3,#CBB99C 70%,#B29E80)" },
    { area: "Bikini", sessions: "6 sessions", before: "linear-gradient(160deg,#B3AA96,#7B7361 80%,#555041)", after: "linear-gradient(160deg,#F1E8D7,#CFBDA1 70%,#B6A283)" },
    { area: "Upper lip", sessions: "5 sessions", before: "linear-gradient(160deg,#B5AC97,#7E7461 80%,#575142)", after: "linear-gradient(160deg,#F3EADA,#D2C0A3 70%,#B7A385)" },
    { area: "Full arms", sessions: "6 sessions", before: "linear-gradient(160deg,#ADA491,#756E5C 80%,#4F4A3D)", after: "linear-gradient(160deg,#EFE6D5,#CDBB9E 70%,#B4A082)" },
    { area: "Men — back", sessions: "7 sessions", before: "linear-gradient(160deg,#B0A794,#78715F 80%,#534E3F)", after: "linear-gradient(160deg,#F0E7D7,#CEBCA0 70%,#B5A183)" },
    { area: "Men — chest", sessions: "7 sessions", before: "linear-gradient(160deg,#AEA693,#776F5D 80%,#524D3E)", after: "linear-gradient(160deg,#EEE5D4,#CCBA9E 70%,#B3A081)" },
    { area: "Men — beard line", sessions: "6 sessions", before: "linear-gradient(160deg,#B1A895,#79715F 80%,#534E40)", after: "linear-gradient(160deg,#F0E6D6,#CCBA9D 70%,#B39F82)" },
    { area: "Full face", sessions: "6 sessions", before: "linear-gradient(160deg,#B4AB98,#7C7360 80%,#565040)", after: "linear-gradient(160deg,#F1E8D8,#CFBDA0 70%,#B5A082)" },
    { area: "Full body", sessions: "8 sessions", before: "linear-gradient(160deg,#B6B3A6,#7E7A6C 80%,#555247)", after: "linear-gradient(160deg,#F3EFE5,#D4CFC0 70%,#BBB6A6)" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.consent) {
      setError("Please add your name, number and tick the consent box.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 pb-12">
      {/* HERO SECTION */}
      <section id="book" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Hero Left: Content */}
          <div className="flex flex-col">
            <span className="eyebrow text-[#974d08] mb-4 font-semibold">Laser Hair Removal · Sharjah</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              Laser hair removal in <em className="italic text-[#974d08] font-light">Sharjah</em>, safe for every skin tone.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl font-light">
              Long-lasting, comfortable hair reduction for face and body — for women and men. Advanced lasers calibrated safely for brown and dark skin, at a fully SHA-licensed clinic.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ab9b83] text-white text-xs font-bold">✓</div>
                <span className="text-sm font-medium text-foreground/90">Safe on brown & dark skin (Fitzpatrick IV–VI)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ab9b83] text-white text-xs font-bold">✓</div>
                <span className="text-sm font-medium text-foreground/90">Fast, virtually painless sessions with built-in cooling</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ab9b83] text-white text-xs font-bold">✓</div>
                <span className="text-sm font-medium text-foreground/90">Full-body & package pricing for men and women</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ab9b83] text-white text-xs font-bold">✓</div>
                <span className="text-sm font-medium text-foreground/90">Free consultation & patch test before you start</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-10 border-t border-border/60 pt-6">
              <div>
                <b className="font-display text-2xl text-foreground block">4.9★</b>
                <small className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">1,280 reviews</small>
              </div>
              <div>
                <b className="font-display text-2xl text-foreground block">All tones</b>
                <small className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Skin types</small>
              </div>
              <div>
                <b className="font-display text-2xl text-foreground block">SHA</b>
                <small className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Licensed clinic</small>
              </div>
            </div>
          </div>

          {/* Hero Right: Lead Form Card */}
          <div className="bg-card border border-border/80 rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-2 border border-[#ab9b83]/20 pointer-events-none rounded-xl" />
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div>
                  <h2 className="font-display text-2xl text-foreground font-semibold mb-1">Get your free consultation</h2>
                  <p className="text-xs text-muted-foreground">We reply within 15 minutes during clinic hours.</p>
                </div>

                <div className="space-y-1">
                  <label htmlFor="name" className="block text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Full name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#974d08] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Mobile number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+971 5X XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#974d08] transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="area" className="block text-[10px] tracking-widest uppercase font-semibold text-muted-foreground">Area of interest</label>
                  <select
                    id="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#974d08] transition-all"
                  >
                    <option>Full body</option>
                    <option>Underarms</option>
                    <option>Bikini / Brazilian</option>
                    <option>Legs</option>
                    <option>Face / upper lip</option>
                    <option>Men — back & chest</option>
                    <option>Men — beard shaping</option>
                    <option>Not sure — advise me</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-normal select-none">
                    I agree to be contacted by Al Nemah Clinic about my enquiry and accept the <Link to="/about" className="text-[#974d08] underline">Privacy Policy</Link>.
                  </label>
                </div>

                {error && (
                  <p className="text-xs text-red-600 font-semibold">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#974d08] text-white py-3.5 text-sm font-semibold hover:opacity-95 transition-all shadow-md"
                >
                  Request my free consultation
                </button>

                <div className="text-center text-xs text-muted-foreground py-1">— or message us directly —</div>

                <a
                  href="https://wa.me/971500999324"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-lg bg-[#1f6b53] text-white py-3.5 text-sm font-semibold hover:bg-[#185541] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  WhatsApp the clinic
                </a>

                <p className="text-[10px] text-muted-foreground text-center pt-2">
                  Treatment follows a consultation and patch test with our specialists.
                </p>
              </form>
            ) : (
              <div className="relative z-10 py-16 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#974d08] text-white text-2xl font-bold">✓</div>
                <h2 className="font-display text-2xl text-foreground font-semibold">Thank you.</h2>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  We've received your request — our team will call you shortly to arrange your free consultation.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST / BADGES BAR */}
      <div className="bg-[#e3dec9]/40 border-y border-border/60 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold text-foreground/75 uppercase tracking-wider">
          <span>SHA Licensed</span>
          <span>Safe for Dark Skin</span>
          <span>Men & Women</span>
          <span>★ 4.9 Google Rating</span>
          <span>Transparent Packages</span>
        </div>
      </div>

      {/* TREATED AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow text-[#974d08] mb-3 font-semibold">Areas we treat</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Smooth skin, head to toe.</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Laser hair removal works across the face and body for both women and men. Your plan is tailored to the area and your hair and skin type.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Full Body", desc: "Complete coverage in discounted package sessions." },
            { title: "Underarms", desc: "Quick, popular area — often just minutes per session." },
            { title: "Bikini & Brazilian", desc: "Precise, private care in sensitive areas." },
            { title: "Legs & Arms", desc: "Long-lasting smoothness over larger areas." },
            { title: "Face & Upper Lip", desc: "Gentle settings for delicate facial skin." },
            { title: "Men — Back, Chest & Beard", desc: "Full-body and beard-line shaping for men." },
          ].map((area) => (
            <div key={area.title} className="bg-card border border-border/60 p-6 rounded-xl hover:border-[#ab9b83]/60 transition-all duration-300">
              <h3 className="font-display text-lg text-foreground font-semibold mb-2">{area.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY AL NEMAH (DEEP OLIVE GREEN) */}
      <section className="bg-[#373D2C] text-[#FAF7F2] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Text & Pillars */}
            <div>
              <span className="eyebrow text-[#C9B188] mb-3 font-semibold block font-sans">Why Al Nemah</span>
              <h2 className="font-display text-3xl md:text-4xl text-[#FAF7F2] font-semibold mb-10">Advanced lasers, expert hands.</h2>
              
              <div className="space-y-8">
                {[
                  { num: "01", title: "Safe for every skin tone", desc: "Devices calibrated for brown and dark skin, with a patch test before each course." },
                  { num: "02", title: "Comfortable, fast sessions", desc: "Built-in cooling and efficient technology keep treatments quick and tolerable." },
                  { num: "03", title: "Trained specialists", desc: "Certified technicians tailor every setting to your hair and skin type." },
                  { num: "04", title: "SHA-licensed clinic", desc: "A fully accredited, hygienic, safety-first clinic in Sharjah." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 items-start">
                    <span className="font-display text-sm text-[#C9B188] font-semibold tracking-wider mt-0.5">{item.num}</span>
                    <div>
                      <h3 className="font-display text-base text-[#FAF7F2] font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-xs text-[#FAF7F2]/80 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Framed clinic photography */}
            <div className="relative max-w-md mx-auto w-full lg:mr-0">
              <div className="p-3 border border-[#C9B188]/30 rounded-2xl">
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gradient-to-tr from-[#E7DECB] via-[#B9AE93] to-[#6F7259] relative shadow-md">
                  <img
                    src={suitabilityImg}
                    alt="Clinic photography"
                    className="w-full h-full object-cover opacity-85 mix-blend-multiply"
                  />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-wider text-[#FAF7F2]/70 font-semibold font-sans select-none">
                    Clinic photography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-[#7B8D6A] text-[#FAF7F2] py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center">
          <span className="eyebrow text-[#EBD9C9] mb-3 font-semibold">See it for yourself</span>
          <h2 className="font-display text-3xl md:text-4xl text-[#F4F1E8] mb-4">Watch a laser session at Al Nemah.</h2>
          <p className="text-sm text-[#CBC7BA] leading-relaxed mb-10 max-w-2xl font-light">
            A quick look at how comfortable, clean and fast the treatment really is — from consultation to the laser itself.
          </p>
          
          {/* Video Player */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-white/20 bg-black group">
            {!videoPlaying ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10">
                <button
                  onClick={handlePlayVideo}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fbfaf8] text-[#3e4138] shadow-lg hover:scale-108 transition-all duration-300 cursor-pointer"
                  aria-label="Play video"
                >
                  <Play className="h-6 w-6 fill-[#3e4138] ml-1" />
                </button>
                <span className="mt-4 text-[10px] tracking-widest uppercase font-semibold text-[#f1eee4] select-none">Play Video</span>
              </div>
            ) : null}
            <video
              ref={videoRef}
              controls
              className="w-full h-full object-cover"
              src="/laser-session.mp4"
            />
          </div>
        </div>
      </section>

      {/* PROCESS STEP-BY-STEP */}
      <section className="bg-[#FAF7F2] border-y border-border/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-[#974d08] mb-3 font-semibold">What to expect</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Your treatment, step by step.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Consultation & Patch Test", desc: "We assess your skin and hair and confirm safe settings." },
              { step: "02", title: "Prep & Cool", desc: "The area is cleaned and cooled for comfort." },
              { step: "03", title: "Laser Session", desc: "Quick, targeted pulses reduce active hair follicles." },
              { step: "04", title: "Aftercare", desc: "Simple aftercare and your next-session schedule." },
            ].map((proc) => (
              <div key={proc.step} className="border-t-2 border-[#ab9b83] pt-6">
                <span className="font-display text-2xl font-semibold text-[#974d08] block mb-2">{proc.step}</span>
                <h3 className="font-display text-base text-foreground font-semibold mb-2">{proc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABILITY */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="p-3 border border-[#974d08]/20 rounded-2xl">
            <img
              src={suitabilityImg}
              alt="Laser skin calibration"
              className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>

          <div>
            <span className="eyebrow text-[#974d08] mb-3 font-semibold">Is it right for you?</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Suitable for most skin & hair types.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
              Laser is most effective on dark hair, and thanks to modern technology it's now safe and effective across a wide range of skin tones — including brown and dark skin common in the region.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <span className="text-[#974d08] font-bold">✓</span>
                <span className="text-xs text-foreground/85 leading-normal">Works best on dark hair (results vary on very light, grey or red hair)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#974d08] font-bold">✓</span>
                <span className="text-xs text-foreground/85 leading-normal">Safe for lighter and darker skin with the right device settings</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#974d08] font-bold">✓</span>
                <span className="text-xs text-foreground/85 leading-normal">Suitable for both women and men across the face and body</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#974d08] font-bold">✓</span>
                <span className="text-xs text-foreground/85 leading-normal">A consultation confirms your suitability and expected results</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER CAROUSEL */}
      <section className="bg-[#FAF7F2] border-y border-border/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="eyebrow text-[#974d08] mb-3 font-semibold">Real results</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Before & after.</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl font-light">
                Real Al Nemah patients, shared with written consent. Slide through to see more.
              </p>
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-[#ab9b83] transition-all cursor-pointer shadow-sm animate-none"
                aria-label="Previous results"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-[#ab9b83] transition-all cursor-pointer shadow-sm animate-none"
                aria-label="Next results"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {galleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="min-w-[85%] sm:min-w-[48%] lg:min-w-[31.3%] snap-start shrink-0"
              >
                <article className="bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm flex flex-col">
                  {/* Side by side before/after using gradient blocks */}
                  <div className="grid grid-cols-2 relative aspect-[4/3] w-full border-b border-border/50">
                    {/* Before half */}
                    <div 
                      style={{ background: item.before }}
                      className="relative h-full w-full overflow-hidden border-r border-border/50"
                    >
                      <span className="absolute left-3 bottom-3 text-[9px] uppercase tracking-wider font-semibold text-white bg-black/45 px-2.5 py-1 rounded select-none">
                        Before
                      </span>
                    </div>

                    {/* After half */}
                    <div 
                      style={{ background: item.after }}
                      className="relative h-full w-full overflow-hidden"
                    >
                      <span className="absolute left-3 bottom-3 text-[9px] uppercase tracking-wider font-semibold text-white bg-black/45 px-2.5 py-1 rounded select-none">
                        After
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="p-5 flex flex-col items-start bg-card min-h-[92px] justify-between">
                    <span className="font-display text-sm font-semibold text-foreground leading-tight">{item.area}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-1">{item.sessions}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((dotIdx) => (
              <button 
                key={dotIdx}
                onClick={() => scrollToPage(dotIdx)} 
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDot === dotIdx ? 'w-6 bg-[#974d08]' : 'w-2 bg-border'}`}
                aria-label={`Page ${dotIdx + 1}`}
              />
            ))}
          </div>

          <p className="text-[10px] text-muted-foreground text-center mt-10">
            All images are of real patients, published with written consent. Individual results vary — laser provides long-lasting hair reduction, not permanent removal.
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-[#FAF7F2] border-y border-border/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#974d08] mb-3 font-semibold">Transparent pricing</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Laser hair removal prices in Sharjah.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Single Areas */}
            <div className="bg-card border border-border/60 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <h3 className="font-display text-xl text-foreground font-semibold mb-4">Single areas</h3>
                <div className="text-3xl font-display text-[#974d08] mb-1">From AED 300</div>
                <p className="text-xs text-muted-foreground mb-6">per session</p>
                <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/50 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Underarms, upper lip, or chin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Quick 15-minute sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Pay as you go pricing</span>
                  </li>
                </ul>
              </div>
              <a href="#book" className="mt-8 text-center rounded-lg border border-foreground/30 px-6 py-3 text-xs font-semibold text-foreground hover:bg-foreground/5 transition-all">
                Enquire
              </a>
            </div>

            {/* Full Body - Featured */}
            <div className="bg-card border-2 border-[#974d08] rounded-xl p-8 shadow-md flex flex-col justify-between relative hover:shadow-lg transition-all scale-[1.02]">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#974d08] text-white text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold shadow-sm">
                Most popular
              </span>
              <div>
                <h3 className="font-display text-xl text-foreground font-semibold mb-4">Full body — package</h3>
                <div className="text-3xl font-display text-[#974d08] mb-1 flex items-baseline gap-2">
                  <span className="text-sm line-through text-muted-foreground">AED 1,200</span>
                  <span>AED 850</span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">per session, in a package</p>
                <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/50 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#974d08]" />
                    <span className="text-foreground font-medium">Full-body coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#974d08]" />
                    <span className="text-foreground font-medium">Best value per area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#974d08]" />
                    <span className="text-foreground font-medium">Course of 6–8 sessions</span>
                  </li>
                </ul>
              </div>
              <a href="#book" className="mt-8 text-center rounded-lg bg-[#974d08] text-white px-6 py-3.5 text-xs font-semibold hover:opacity-95 transition-all shadow-md">
                Get package price
              </a>
            </div>

            {/* Men's Packages */}
            <div className="bg-card border border-border/60 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <h3 className="font-display text-xl text-foreground font-semibold mb-4">Men's packages</h3>
                <div className="text-3xl font-display text-[#974d08] mb-1">From AED 400</div>
                <p className="text-xs text-muted-foreground mb-6">per session</p>
                <ul className="space-y-2.5 text-xs text-muted-foreground border-t border-border/50 pt-5">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Back, chest, or full body</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Beard-line neck shaping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83]" />
                    <span>Special package discounts</span>
                  </li>
                </ul>
              </div>
              <a href="#book" className="mt-8 text-center rounded-lg border border-foreground/30 px-6 py-3 text-xs font-semibold text-foreground hover:bg-foreground/5 transition-all">
                Enquire
              </a>
            </div>
          </div>

          <p className="text-center text-[10px] text-muted-foreground max-w-2xl mx-auto mt-10">
            Prices are indicative. Your final plan and price are confirmed at a free consultation, based on the areas treated and number of sessions. Flexible payment options available.
          </p>
        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[#974d08] mb-3 font-semibold">In their words</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Loved by 1,280 patients.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "Finally a clinic that's safe for my skin tone. Barely any hair left after my course — and it was quick and comfortable.", author: "Aisha M." },
            { quote: "Professional and hygienic, and the team explained everything. Underarms took minutes.", author: "Fatima K." },
            { quote: "Did the full back and chest package — great results and no irritation. Highly recommend for men.", author: "Tarek S." },
          ].map((rev, idx) => (
            <div key={idx} className="bg-card border border-border/60 p-8 rounded-xl shadow-sm relative">
              <p className="text-sm italic text-muted-foreground leading-relaxed mb-6 font-light">"{rev.quote}"</p>
              <b className="text-xs uppercase tracking-wider text-foreground block font-semibold">{rev.author}</b>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#FAF7F2] border-y border-border/40 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow text-[#974d08] mb-3 font-semibold">Q&A</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Laser hair removal in Sharjah — your questions.</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Is laser hair removal safe for dark skin?",
                a: "Yes. We use advanced laser systems suited to darker and brown (Fitzpatrick IV–VI) skin tones, and a patch test is carried out before every new course to confirm the safest settings for you.",
              },
              {
                q: "How many sessions will I need?",
                a: "Most people need around 6 to 8 sessions spaced a few weeks apart, because hair grows in cycles. Your exact plan depends on the area and your hair and skin type, and is confirmed at consultation.",
              },
              {
                q: "How much does laser hair removal cost?",
                a: "Laser hair removal at Al Nemah starts from AED 300 per small area, with discounted full-body and package pricing. Your final price is confirmed at a free consultation.",
              },
              {
                q: "Does it hurt?",
                a: "Most patients describe a mild snapping sensation. Our devices include built-in cooling to keep treatment comfortable, and numbing can be applied to sensitive areas.",
              },
              {
                q: "Is it permanent?",
                a: "Laser hair removal provides long-lasting hair reduction rather than permanent removal. Most people enjoy months to years of smoothness, with occasional maintenance sessions.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-border/60 p-6 rounded-xl">
                <b className="font-display text-sm text-foreground block mb-2">{faq.q}</b>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK CTA SECTION */}
      <section className="bg-[#e3dec9] py-16 text-center border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <span className="eyebrow text-[#974d08] mb-4 font-semibold">Ready for smooth, hair-free skin?</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">Book your consultation today.</h2>
          <p className="text-sm text-foreground/80 max-w-md mx-auto mb-8 font-medium">
            Start with a free consultation and patch test — honest advice and a plan tailored to you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#book" className="rounded-lg bg-[#974d08] text-white px-8 py-4 text-sm font-semibold hover:opacity-95 transition-all shadow-md">
              Request Free Consultation
            </a>
            <a
              href="https://wa.me/971500999324"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#1f6b53] text-[#1f6b53] px-8 py-4 text-sm font-semibold hover:bg-[#1f6b53]/5 transition-all flex items-center gap-1.5"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground text-center pt-8 max-w-xl mx-auto leading-relaxed">
            This page is for general information and is not medical advice. Treatment follows an in-person consultation and patch test; suitability, results and any side effects are discussed at consultation. Individual results vary. Al Nemah Clinic · SHA License No. 020725. © {new Date().getFullYear()} Al Nemah Clinic.
          </p>
        </div>
      </section>
    </div>
  );
}
