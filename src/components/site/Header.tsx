import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import injectablesImg from "@/assets/service-injectables.jpg";
import skinImg from "@/assets/service-skin.jpg";
import laserImg from "@/assets/service-laser.jpg";
import liftingImg from "@/assets/service-lifting.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import treatmentHandsImg from "@/assets/treatment-hands.jpg";
import treatmentRoomImg from "@/assets/treatment-room.jpg";
import interiorImg from "@/assets/interior.jpg";
import aboutImg from "@/assets/about.jpg";

const simpleNav = [
  { to: "/about", label: "The Clinic" },
  { to: "/#doctors", label: "Doctors" },
  { to: "/#results", label: "Results" },
  { to: "/#offers", label: "Offers" },
] as const;

const dermaLinks = [
  { to: "/services/skin", title: "Skin & HydraFacial", desc: "Facials, peels, microneedling", image: skinImg },
  { to: "/services/injectables", title: "Cosmetic Injectables", desc: "Botox, fillers, Profhilo", image: injectablesImg },
  { to: "/services/laser", title: "Laser & Hair Removal", desc: "Hair, pigmentation, vascular", image: laserImg },
  { to: "/services/lifting", title: "Anti-Aging & Lifting", desc: "Morpheus8, Ultherapy, threads", image: liftingImg },
  { to: "/services/surgery", title: "Plastic Surgery", desc: "Rhinoplasty, liposuction", image: surgeryImg },
] as const;

const dentalLinks = [
  { to: "/services/dental/orthodontics", title: "Orthodontics & Invisalign", desc: "Braces, clear aligners", image: wellnessImg },
  { to: "/services/dental/cosmetic-dentistry", title: "Cosmetic Dentistry & Veneers", desc: "Hollywood smile, bonding", image: treatmentHandsImg },
  { to: "/services/dental/implants", title: "Dental Implants", desc: "Single & full-arch", image: treatmentRoomImg },
  { to: "/services/dental/whitening", title: "Teeth Whitening", desc: "In-clinic & take-home", image: interiorImg },
  { to: "/services/dental/general", title: "General & Preventive", desc: "Check-ups, fillings, root canal", image: aboutImg },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 180);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-background/90 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-ivory text-[11px] py-1.5 px-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-1.5 transition-all duration-300">
        <div className="flex items-center gap-1.5 opacity-90 tracking-wide font-light">
          <span>Behind Zahia City Center, Sharjah</span>
          <span className="opacity-45">•</span>
          <span>Open daily 10am–10pm</span>
        </div>
        <div className="flex items-center gap-4 opacity-90 font-light">
          <a href="tel:+971500999324" className="hover:underline tracking-wide">+971 50 099 9324</a>
          <span className="opacity-30">/</span>
          <div className="flex gap-2">
            <span className="font-semibold text-accent">EN</span>
            <span className="opacity-30">/</span>
            <span className="hover:underline cursor-pointer opacity-70">العربية</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src="/logo-al-nemah.png"
            alt="Al Nemah Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              className={`inline-flex items-center gap-1 text-sm tracking-wide transition-colors ${
                servicesOpen
                  ? "text-foreground font-medium"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Treatments
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div 
                className="absolute top-full left-1/2 mt-5 w-[840px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl z-50"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div className="grid grid-cols-[1.1fr_1.1fr_0.9fr]">
                  {/* Division 01 */}
                  <div className="p-8 border-r border-border/40">
                    <p className="eyebrow mb-2">Division 01</p>
                    <h3 className="font-display text-xl text-foreground font-semibold mb-6">Dermatology & Aesthetics</h3>
                    <ul className="space-y-4">
                      {dermaLinks.map((s) => (
                        <li key={s.to}>
                          <Link
                            to={s.to}
                            onClick={() => setServicesOpen(false)}
                            className="group block rounded-lg hover:bg-muted/30 p-2 -ml-2 transition-all"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                              {s.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground block mt-0.5">
                              {s.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Division 02 */}
                  <div className="p-8 border-r border-border/40">
                    <p className="eyebrow mb-2">Division 02</p>
                    <h3 className="font-display text-xl text-foreground font-semibold mb-6">Dental Services</h3>
                    <ul className="space-y-4">
                      {dentalLinks.map((s) => (
                        <li key={s.to}>
                          <Link
                            to={s.to}
                            onClick={() => setServicesOpen(false)}
                            className="group block rounded-lg hover:bg-muted/30 p-2 -ml-2 transition-all"
                          >
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                              {s.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground block mt-0.5">
                              {s.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature Panel */}
                  <div className="bg-forest p-8 flex flex-col justify-between text-ivory relative overflow-hidden">
                    <div className="absolute inset-4 border border-[#d2a960]/30 pointer-events-none rounded-lg" />
                    <div className="relative z-10">
                      <p className="eyebrow text-[#d2a960] mb-2">Not sure where to start?</p>
                      <h4 className="font-display text-xl text-white mb-3">Book a consultation</h4>
                      <p className="text-xs text-ivory/70 leading-relaxed">
                        Tell us your goal — our doctors recommend the right pathway across skin and dental.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/971500999324"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setServicesOpen(false)}
                      className="relative z-10 w-full text-center rounded-lg bg-[#1f6b53] hover:opacity-95 py-3 text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 shadow-sm mt-8"
                    >
                      WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {simpleNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+971500999324"
            className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-muted/50 transition-all"
          >
            Call
          </a>
          <a
            href="https://wa.me/971500999324"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-95 transition-all shadow-sm"
          >
            Book consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-1 px-6 py-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
              Menu
            </p>
            {simpleNav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-foreground/80 hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              Dermatology & Aesthetics
            </p>
            {dermaLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="py-1.5 pl-2 text-sm text-foreground/70 hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}

            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              Dental Services
            </p>
            {dentalLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="py-1.5 pl-2 text-sm text-foreground/70 hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/40">
              <a
                href="tel:+971500999324"
                className="flex justify-center rounded-lg border border-border py-2.5 text-sm font-medium text-foreground"
              >
                Call
              </a>
              <a
                href="https://wa.me/971500999324"
                className="flex justify-center rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground"
              >
                Book consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
