import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-injectables.jpg";

export const Route = createFileRoute("/services/injectables")({
  head: () => ({
    meta: [
      { title: "Botox, Fillers & Profhilo in Dubai | Injectables — Al Nemah" },
      { name: "description", content: "Doctor-administered cosmetic injectables in Dubai — Botox, dermal fillers, Profhilo and lip enhancement for natural, refined results. Book a consultation." },
      { property: "og:title", content: "Cosmetic Injectables at Al Nemah" },
      { property: "og:description", content: "Doctor-administered injectables for soft, natural rejuvenation." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Cosmetic Injectables"
      eyebrow="Dermatology · Injectables"
      metaTitle="Botox, Fillers & Profhilo in Dubai | Injectables — Al Nemah"
      metaDesc="Doctor-administered cosmetic injectables in Dubai — Botox, dermal fillers, Profhilo and lip enhancement for natural, refined results. Book a consultation."
      h1="Cosmetic Injectables in Dubai"
      intro="Doctor-administered injectables for soft, natural rejuvenation — smoothing lines and restoring volume without ever looking overdone."
      highlights={[
        ["20–40 min", "Per session"],
        ["Minimal", "Downtime"],
        ["Doctor-led", "Every case"],
      ]}
      concerns={["Forehead lines", "Crow's feet", "Frown lines", "Volume loss", "Thin lips", "Skin laxity"]}
      txIntro="Our full injectables menu — all mapped and performed by a doctor."
      treatments={[
        {
          name: "Anti-Wrinkle (Botox)",
          body: "Relaxes targeted muscles to soften forehead, frown and eye lines.",
          tags: ["Fine lines", "Prevention"],
          duration: "20 min · No downtime",
          price: "From AED 900",
        },
        {
          name: "Dermal Fillers",
          body: "Restores volume and contour in cheeks, chin, jaw and under-eyes.",
          tags: ["Volume", "Contour"],
          duration: "30–40 min · Minimal",
          price: "From AED 1,500",
        },
        {
          name: "Profhilo",
          body: "Bio-remodelling that hydrates and firms skin across the face.",
          tags: ["Laxity", "Glow"],
          duration: "20 min · No downtime",
          price: "From AED 1,800",
        },
        {
          name: "Lip Enhancement",
          body: "Subtle, balanced lip shaping and hydration.",
          tags: ["Shape", "Hydration"],
          duration: "30 min · Minimal",
          price: "From AED 1,500",
        },
      ]}
      faqs={[
        {
          question: "Will I look frozen?",
          answer: "No — we dose conservatively so expression stays natural.",
        },
        {
          question: "How long does it last?",
          answer: "Anti-wrinkle 3–4 months; fillers 6–12 months by area.",
        },
        {
          question: "Does it hurt?",
          answer: "Minimal; fine needles and numbing keep it comfortable.",
        },
      ]}
      related={[
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
        { slug: "/services/laser", label: "Laser & Hair Removal" },
      ]}
      heroImage={heroImg}
      dental={false}
    />
  ),
});
