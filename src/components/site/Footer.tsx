import { Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
  Youtube,
  Ghost,
  MapPin,
  Phone,
} from "lucide-react";

const exploreLinks = [
  { to: "/about", label: "About Al Nemah" },
  { to: "/about", label: "Specialists" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contacts" },
  { to: "/", label: "News" },
] as const;

const aestheticLinks = [
  { to: "/services/injectables", label: "Cosmetic Injectables" },
  { to: "/services/skin", label: "Skin & HydraFacial" },
  { to: "/services/laser", label: "Laser & Hair Removal" },
  { to: "/services/lifting", label: "Anti-Aging & Lifting" },
] as const;

const surgeryLinks = [
  { to: "/services/surgery", label: "Plastic Surgery" },
  { to: "/services/surgery", label: "Rhinoplasty" },
  { to: "/services/surgery", label: "Liposuction" },
  { to: "/services/surgery", label: "Blepharoplasty" },
] as const;

const longevityLinks = [
  { to: "/services/wellness", label: "IV Drips" },
  { to: "/services/wellness", label: "Hormone Health" },
  { to: "/services/wellness", label: "Hair Restoration" },
  { to: "/services/wellness", label: "Skin Boosters" },
] as const;

const socials = [
  { href: "https://wa.me/971543251817", label: "WhatsApp", Icon: MessageCircle },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://t.me", label: "Telegram", Icon: Send },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://snapchat.com", label: "Snapchat", Icon: Ghost },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ to: string; label: string }>;
}) {
  return (
    <div>
      <p className="mb-5 text-sm font-medium tracking-wide text-ivory">{title}</p>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-ivory/70 transition-colors hover:text-ivory">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 bg-[#3a3a36] text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo-al-nemah.png"
                alt="Al Nemah Logo"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-ivory transition-colors hover:text-ivory/70">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aesthetic */}
          <div className="lg:col-span-2">
            <FooterColumn title="Aesthetic Medicine" links={aestheticLinks} />
          </div>

          {/* Surgery + Longevity */}
          <div className="lg:col-span-2 space-y-8">
            <FooterColumn title="Plastic Surgery" links={surgeryLinks} />
          </div>

          <div className="lg:col-span-3 space-y-8">
            <FooterColumn title="Precision Longevity" links={longevityLinks} />
          </div>
        </div>

        {/* Right rail: CTA + socials + contacts + map */}
        <div className="mt-16 grid gap-12 border-t border-ivory/15 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <a href="tel:+971800735463" className="block text-ivory underline-offset-4 hover:underline">
                +971 800 735 463
              </a>
              <a href="mailto:hello@lumiere.ae" className="block text-ivory underline-offset-4 hover:underline">
                hello@lumiere.ae
              </a>
              <p className="pt-2 text-ivory/70">
                Jumeirah Beach Road, Dubai, United Arab Emirates
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-ivory hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              Request a Call
            </Link>
            <a
              href="https://maps.google.com/?q=Jumeirah+Beach+Road+Dubai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-7 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Interactive Map
              <MapPin className="h-4 w-4 text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center lg:px-10">
          <a href="#" className="underline-offset-4 hover:underline">
            Personal Data Processing Policy
          </a>
          <p>
            © {new Date().getFullYear()} Al Nemah Clinic. All rights reserved. M.O.H. Approval No2FXSIE1V-020725
          </p>
        </div>
      </div>
    </footer>
  );
}
