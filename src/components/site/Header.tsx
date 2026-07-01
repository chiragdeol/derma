import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import injectablesImg from "@/assets/service-injectables.jpg";
import skinImg from "@/assets/service-skin.jpg";
import laserImg from "@/assets/service-laser.jpg";
import liftingImg from "@/assets/service-lifting.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";
import wellnessImg from "@/assets/wellness.jpg";

const simpleNav = [
  { to: "/about", label: "The Clinic" },
  { to: "/#doctors", label: "Doctors" },
  { to: "/#results", label: "Results" },
  { to: "/#offers", label: "Offers" },
] as const;

const serviceLinks = [
  {
    to: "/services/injectables",
    title: "Cosmetic Injectables",
    desc: "Botox, fillers & Profhilo",
    image: injectablesImg,
  },
  {
    to: "/services/skin",
    title: "Skin & HydraFacial",
    desc: "Medical-grade facials & peels",
    image: skinImg,
  },
  {
    to: "/services/laser",
    title: "Laser & Hair Removal",
    desc: "Multi-wavelength platforms",
    image: laserImg,
  },
  {
    to: "/services/lifting",
    title: "Anti-Aging & Lifting",
    desc: "Morpheus8, threads & Ultherapy",
    image: liftingImg,
  },
  {
    to: "/services/surgery",
    title: "Plastic Surgery",
    desc: "Board-certified surgeons",
    image: surgeryImg,
  },
  {
    to: "/services/wellness",
    title: "Wellness & Longevity",
    desc: "IV drips & hormone health",
    image: wellnessImg,
  },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          <span>Jumeirah Beach Road, Dubai</span>
          <span className="opacity-45">•</span>
          <span>Open daily 10am–10pm</span>
        </div>
        <div className="flex items-center gap-4 opacity-90 font-light">
          <a href="tel:+97140000000" className="hover:underline tracking-wide">+971 4 000 0000</a>
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
              <div className="absolute top-full left-1/2 mt-5 w-[720px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="group block overflow-hidden rounded-xl"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="overflow-hidden rounded-xl">
                          <img
                            src={s.image}
                            alt={s.title}
                            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            width={280}
                            height={210}
                          />
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium text-foreground">
                            {s.title}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border/40 pt-4 text-center">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-sm font-medium text-foreground underline-offset-8 hover:underline"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services →
                    </Link>
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
            href="tel:+97140000000"
            className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-muted/50 transition-all"
          >
            Call
          </a>
          <a
            href="https://wa.me/971543251817"
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
              Treatments
            </p>
            {serviceLinks.map((s) => (
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
                href="tel:+97140000000"
                className="flex justify-center rounded-lg border border-border py-2.5 text-sm font-medium text-foreground"
              >
                Call
              </a>
              <a
                href="https://wa.me/971543251817"
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
