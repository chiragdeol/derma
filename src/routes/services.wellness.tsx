import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Check, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import wellnessImg from "@/assets/wellness.jpg";

export const Route = createFileRoute("/services/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness & IV Drips in Sharjah | Restore Balance — Al Nemah" },
      { name: "description", content: "Advanced wellness and longevity therapies in Sharjah (New Muweilah). IV nutrient therapy, lymphatic drainage, body sculpting, and longevity assessments." },
      { property: "og:title", content: "Wellness & IV Drips at Al Nemah" },
      { property: "og:description", content: "Intravenous nutrients, postpartum recovery, sleep reset, and body sculpting in Sharjah." },
      { property: "og:image", content: wellnessImg },
    ],
  }),
  component: WellnessLanding,
});

function WellnessLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "IV Nutrient Therapy",
    consent: false,
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [id]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.consent) {
      setError("Please fill in all fields and accept the consent check.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

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
      setActiveDot(Math.round(percentage));
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollRef.current.scrollTo({
        left: pageIndex * maxScroll,
        behavior: 'smooth',
      });
    }
  };

  const programs = [
    {
      name: "IV Nutrient Therapy",
      body: "Tailored intravenous blends of vitamins, minerals, and antioxidants for instant hydration, energy, immunity, recovery, or radiance.",
      time: "45 min",
      price: "From AED 450",
      points: [
        "100% absorption compared to oral supplements",
        "Customized formulas (Myers' Cocktail, Glow/Detox, Immunity)",
        "Administered under strict medical supervision",
        "Instant rehydration and fatigue relief",
      ]
    },
    {
      name: "Lymphatic Drainage",
      body: "A specialised manual drainage technique to reduce inflammation, remove toxins, relieve fluid retention, and sculpt body contours.",
      time: "60 min",
      price: "From AED 400",
      points: [
        "Stimulates natural lymphatic circulation",
        "Reduces swelling and puffiness after travel or surgery",
        "Promotes deep relaxation and stress relief",
        "Supports immune system function",
      ]
    },
    {
      name: "Longevity Assessment",
      body: "Comprehensive diagnostic profiling, body composition analysis, and a personalized longevity program designed to optimize your biological age.",
      time: "120 min",
      price: "From AED 1200",
      points: [
        "Advanced hormone and nutrient blood panels",
        "InBody composition and metabolic rate analysis",
        "Specialist consultation and lifestyle coaching",
        "Personalized supplementation and therapy plan",
      ]
    },
    {
      name: "Body Sculpting",
      body: "Advanced non-surgical technologies combining radiofrequency, cryolipolysis, and EMS to target stubborn fat and tone muscle.",
      time: "45–60 min",
      price: "From AED 500",
      points: [
        "Targeted muscle stimulation and toning",
        "Safe, FDA-approved non-invasive platforms",
        "No downtime — return to activity immediately",
        "Best results in course programs",
      ]
    },
    {
      name: "Sleep & Stress Reset",
      body: "Multi-modal therapeutic sessions combining breathwork, red light therapy, and targeted relaxation protocols to reset your nervous system.",
      time: "75 min",
      price: "From AED 400",
      points: [
        "Reduces cellular stress and inflammation",
        "Optimizes circadian rhythms and sleep cycles",
        "Helps clear brain fog and mental fatigue",
        "Deeply calming for high-stress lifestyles",
      ]
    },
    {
      name: "Postpartum Recovery Protocol",
      body: "A gentle, doctor-led rehabilitation protocol designed to support tissue healing, balance hormones, and restore energy levels after childbirth.",
      time: "Course program",
      price: "From AED 800",
      points: [
        "Pelvic floor and core tissue support",
        "Hormone balancing and nutrient replenishment",
        "Safe, gentle therapies customized to your recovery timeline",
        "Guided by certified specialists",
      ]
    }
  ];

  const galleryItems = [
    { area: "Abdomen Sculpting", sessions: "8 sessions", before: "linear-gradient(160deg,#B2A995,#7A7260 80%,#544F40)", after: "linear-gradient(160deg,#F2E9D9,#D0BEA1 70%,#B6A284)" },
    { area: "Thigh Contouring", sessions: "6 sessions", before: "linear-gradient(160deg,#AFA894,#77705E 80%,#524D3F)", after: "linear-gradient(160deg,#EFE5D3,#CBB99C 70%,#B29E80)" },
    { area: "Lymphatic Detox", sessions: "5 sessions", before: "linear-gradient(160deg,#B3AA96,#7B7361 80%,#555041)", after: "linear-gradient(160deg,#F1E8D7,#CFBDA1 70%,#B6A283)" },
    { area: "Arm Tightening", sessions: "8 sessions", before: "linear-gradient(160deg,#B5AC97,#7E7461 80%,#575142)", after: "linear-gradient(160deg,#F3EADA,#D2C0A3 70%,#B7A385)" },
    { area: "Post-Baby Reset", sessions: "10 sessions", before: "linear-gradient(160deg,#ADA491,#756E5C 80%,#4F4A3D)", after: "linear-gradient(160deg,#EFE6D5,#CDBB9E 70%,#B4A082)" },
    { area: "Waist Reduction", sessions: "8 sessions", before: "linear-gradient(160deg,#B0A794,#78715F 80%,#534E3F)", after: "linear-gradient(160deg,#F0E7D7,#CEBCA0 70%,#B5A183)" },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative bg-[#faf8f5] overflow-hidden pt-12 pb-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Text Content & Image */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center relative z-10">
            <span className="eyebrow text-[#974d08] mb-4 font-semibold font-sans">Precision Wellness</span>
            <h1 className="font-display text-4xl leading-[1.15] text-foreground md:text-5xl lg:text-[4.25rem] font-semibold mb-6">
              Wellness & <em className="italic">Recovery.</em>
            </h1>
            <p className="max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed font-light mb-8">
              Programs and therapies that restore balance from within — for energy, immunity, recovery, and a body that feels like home.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#ab9b83]/15 text-[#ab9b83] px-3.5 py-2 rounded-lg">
                ✓ IV Nutrient Drips
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#ab9b83]/15 text-[#ab9b83] px-3.5 py-2 rounded-lg">
                ✓ Longevity Biomarkers
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#ab9b83]/15 text-[#ab9b83] px-3.5 py-2 rounded-lg">
                ✓ Body Sculpting
              </span>
            </div>

            <div className="p-3 border border-[#974d08]/10 rounded-2xl w-full max-w-xl mt-8">
              <img
                src={wellnessImg}
                alt="Wellness treatment room"
                className="rounded-xl w-full h-[260px] object-cover"
              />
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-5 relative">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border/60 rounded-2xl p-8 shadow-md relative z-10 flex flex-col gap-5 max-w-lg mx-auto"
              >
                <div className="mb-2">
                  <h3 className="font-display text-2xl text-foreground font-semibold">Start your health journey</h3>
                  <p className="text-xs text-muted-foreground mt-1">Book a consultation or IV drip session in Sharjah.</p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="rounded-lg border border-border bg-background px-4 py-3 text-xs outline-none focus:border-[#ab9b83] transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">WhatsApp Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 50 000 0000"
                    className="rounded-lg border border-border bg-background px-4 py-3 text-xs outline-none focus:border-[#ab9b83] transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-foreground/80">Select Treatment Interest</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-xs outline-none focus:border-[#ab9b83] transition-all appearance-none cursor-pointer"
                  >
                    <option value="IV Nutrient Therapy">IV Nutrient Therapy</option>
                    <option value="Lymphatic Drainage">Lymphatic Drainage</option>
                    <option value="Longevity Assessment">Longevity Assessment</option>
                    <option value="Body Sculpting">Non-Invasive Body Sculpting</option>
                    <option value="Sleep & Stress Reset">Sleep & Stress Reset</option>
                    <option value="Postpartum Recovery">Postpartum Recovery Protocol</option>
                  </select>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-3.5 w-3.5 rounded border-border text-[#974d08] focus:ring-[#974d08]"
                    required
                  />
                  <label htmlFor="consent" className="text-[10px] text-muted-foreground leading-normal">
                    I agree to be contacted via WhatsApp/Phone by Al Nemah Medical Center to confirm my appointment.
                  </label>
                </div>

                {error && (
                  <p className="text-[10px] text-red-600 font-semibold">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#974d08] text-white py-3.5 text-sm font-semibold hover:opacity-95 transition-all shadow-md cursor-pointer"
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
                  Treatment follows a consultation and medical checks with our specialists.
                </p>
              </form>
            ) : (
              <div className="relative z-10 py-16 text-center space-y-4 bg-card border border-border/60 rounded-2xl shadow-md max-w-lg mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#974d08] text-white text-2xl font-bold">✓</div>
                <h2 className="font-display text-2xl text-foreground font-semibold">Thank you.</h2>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed px-6">
                  We've received your request — our team will call you shortly to arrange your wellness consultation.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TRUST / BADGES BAR */}
      <div className="bg-[#e3dec9]/40 border-y border-border/60 py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap justify-between items-center gap-4 text-xs font-semibold text-foreground/75 uppercase tracking-wider">
          <span>SHA Licensed Clinic</span>
          <span>Doctor Supervised</span>
          <span>100% Sterile IV Drips</span>
          <span>★ 4.9 Google Rating</span>
          <span>Longevity Diagnostics</span>
        </div>
      </div>

      {/* THE APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow text-[#974d08] mb-3 font-semibold block">The approach</span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground font-semibold">
              Outside reflects <em className="italic">inside.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
              Lasting beauty and performance depend on what is happening beneath the skin. Our wellness programs are built on diagnostics — sleep, stress, hormones, and micronutrients — so every treatment serves a longer arc of vitality, not just a single appointment.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS LIST */}
      <section className="bg-[#FAF7F2] border-y border-border/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-[#974d08] mb-3 font-semibold">Our Menu</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">For energy, calm, and longevity.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <article key={p.name} className="bg-card border border-border/60 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <h3 className="font-display text-xl text-foreground font-semibold mb-2">{p.name}</h3>
                  <div className="text-2xl font-display text-[#974d08] mb-2">{p.price}</div>
                  <p className="text-xs text-muted-foreground mb-6">{p.body}</p>
                  
                  <ul className="space-y-2 text-xs text-muted-foreground border-t border-border/50 pt-4">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ab9b83] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-wider text-muted-foreground font-bold border-t border-border/30 pt-4">
                  <span>Duration: {p.time}</span>
                  <a href="#book" className="text-[#974d08] hover:underline font-bold">Enquire</a>
                </div>
              </article>
            ))}
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
                className="min-w-[85%] sm:min-w-[48%] lg:min-w-[18.8%] snap-start shrink-0"
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
            <button 
              onClick={() => scrollToPage(0)} 
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDot === 0 ? 'w-6 bg-[#974d08]' : 'w-2 bg-border'}`}
              aria-label="First page"
            />
            <button 
              onClick={() => scrollToPage(1)} 
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDot === 1 ? 'w-6 bg-[#974d08]' : 'w-2 bg-border'}`}
              aria-label="Second page"
            />
          </div>

          <p className="text-[10px] text-muted-foreground text-center mt-10">
            All images are of real patients, published with written consent. Individual results vary — body contouring therapies work best in courses combined with a healthy lifestyle.
          </p>
        </div>
      </section>

      {/* THE AL NEMAH CIRCLE MEMBERSHIP */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-[#974d08] mb-3 font-semibold block">Membership</span>
            <h2 className="font-display text-4xl leading-tight md:text-5xl text-foreground font-semibold">
              The Al Nemah <em className="italic">circle.</em>
            </h2>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground font-light">
              A year-long program of seasonal assessments, monthly therapies and direct access to our medical team — designed for clients who treat wellbeing as a long practice.
            </p>
            <a href="#book" className="mt-8 inline-flex rounded-lg bg-[#974d08] px-7 py-3.5 text-xs font-semibold text-white hover:opacity-90 shadow-md">
              Request membership details
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
            <h4 className="font-display text-lg text-foreground font-semibold mb-6 border-b border-border/50 pb-4">Circle Inclusions</h4>
            <ul className="space-y-4 text-xs text-muted-foreground">
              {["Quarterly biomarker panel & blood screen", "Monthly customized nutrient therapy / body contouring", "Priority priority booking and emergency medical line", "Direct consultation with our Medical Director", "Seasonal health and wellness protocols"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ab9b83]" />
                  <span className="text-foreground/85 leading-normal">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20 border-t border-border/30">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow text-[#974d08] mb-3 font-semibold">In their words</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Loved by our patients.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: "The biomarker assessment was eye-opening. Dr. explained every value in detail, and the custom IV plan has really restored my energy.", author: "Sarah H." },
            { quote: "Highly professional team. The lymphatic drainage sessions are incredible for reducing swelling and fatigue after long flights.", author: "Mariam A." },
            { quote: "Clean, hygienic, and highly medically focused. They don't just sell drips — they focus on custom diagnostics.", author: "Khaled D." },
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
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Wellness & IV Drips — your questions.</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is inside your IV drips?",
                a: "Our drips are clinical-grade, sterilized mixtures of vitamins (like Vitamin C, B-complex), minerals (magnesium, zinc), amino acids, and powerful antioxidants like glutathione, dissolved in sterile saline for complete absorption.",
              },
              {
                q: "How do I know which IV drip is right for me?",
                a: "Before your first drip, a medical specialist reviews your health history, symptoms, and wellness goals. We then recommend or customize a blend suited for you.",
              },
              {
                q: "What is the benefit of a longevity assessment?",
                a: "Rather than waiting for symptoms, our biomarker assessments identify underlying imbalances in thyroid, adrenal health, vitamin levels, and inflammation, helping us build a preventative roadmap for your health.",
              },
              {
                q: "How often should I get lymphatic drainage?",
                a: "For general wellness and detox, once or twice a month is ideal. For targeted goals like post-travel recovery or fluid reduction, a concentrated course of 3 to 5 weekly sessions is recommended.",
              },
              {
                q: "Are your wellness therapies safe?",
                a: "Yes. All therapies at Al Nemah are conducted by licensed clinical nurses under the direct guidance of physicians, using approved materials in a fully sterile clinical environment.",
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
          <span className="eyebrow text-[#974d08] mb-4 font-semibold font-sans">Ready to optimize your health?</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-semibold">Book your consultation today.</h2>
          <p className="text-sm text-foreground/80 max-w-md mx-auto mb-8 font-medium">
            Start with a consultation and personalized biomarker check — medical-grade care in Sharjah.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#book" className="rounded-lg bg-[#974d08] text-white px-8 py-4 text-sm font-semibold hover:opacity-95 transition-all shadow-md cursor-pointer">
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
            This page is for general information and is not medical advice. Treatment follows an in-person consultation; suitability, results and any side effects are discussed with medical professionals. Al Nemah Clinic · SHA License No. 020725. © {new Date().getFullYear()} Al Nemah Clinic.
          </p>
        </div>
      </section>
    </div>
  );
}
