import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFab } from "../components/site/WhatsAppFab";

import { useLocation } from "@tanstack/react-router";
import { applySEOToDocument, applyCustomHeaderScripts } from "../lib/seo-manager";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-6xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent/20"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Al Nemah Clinic — Advanced Medicine meets Aesthetic Artistry" },
      { name: "description", content: "Al Nemah Clinic, Sharjah: multidisciplinary aesthetic, laser and dental center delivering natural, refined results." },
      { property: "og:title", content: "Al Nemah Medical Center Sharjah" },
      { property: "og:description", content: "Doctor-led skin, laser, and dental treatments in Sharjah. Natural, refined aesthetic results." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Al Nemah Medical Center Sharjah" },
      { property: "og:url", content: "https://alnemahmc.com" },
      { property: "og:image", content: "https://alnemahmc.com/og-cover.png" },
      { property: "og:image:secure_url", content: "https://alnemahmc.com/og-cover.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Al Nemah Medical Center Sharjah" },
      { name: "twitter:description", content: "Doctor-led skin, laser, and dental treatments in Sharjah." },
      { name: "twitter:image", content: "https://alnemahmc.com/og-cover.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo-al-nemah.png" },
      { rel: "apple-touch-icon", href: "/logo-al-nemah.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaOrgJSON = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Dentist", "DermatologyClinic"],
    "name": "Al Nemah Medical Center Sharjah",
    "image": "https://alnemahmc.com/logo-al-nemah.png",
    "logo": "https://alnemahmc.com/logo-al-nemah.png",
    "url": "https://alnemahmc.com",
    "telephone": ["+971500999324", "+971566814451"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Behind Zahia City Center, New Muweilah",
      "addressLocality": "Sharjah",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3134,
      "longitude": 55.4382
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "22:00"
    },
    "medicalSpecialty": ["Dermatology", "CosmeticDentistry", "LaserSurgery"],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="icon" type="image/png" href="/logo-al-nemah.png" />
        <link rel="apple-touch-icon" href="/logo-al-nemah.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSON) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    applySEOToDocument(location.pathname);
    applyCustomHeaderScripts();
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
