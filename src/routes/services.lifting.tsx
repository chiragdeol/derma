import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-lifting.jpg";

export const Route = createFileRoute("/services/lifting")({
  head: () => ({
    meta: [
      { title: "Non-Surgical Lifting in Dubai | Morpheus8, Ultherapy — Al Nemah" },
      { name: "description", content: "Non-surgical face lifting and skin tightening in Dubai — Morpheus8, Ultherapy, PDO threads and Fotona 4D. Lift and boost collagen without surgery." },
      { property: "og:title", content: "Anti-Aging & Lifting at Al Nemah" },
      { property: "og:description", content: "Tighten, lift and rebuild collagen without surgery." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Anti-Aging & Lifting"
      eyebrow="Dermatology · Anti-Aging"
      metaTitle="Non-Surgical Lifting in Dubai | Morpheus8, Ultherapy — Al Nemah"
      metaDesc="Non-surgical face lifting and skin tightening in Dubai — Morpheus8, Ultherapy, PDO threads and Fotona 4D. Lift and boost collagen without surgery."
      h1="Anti-Aging & Lifting in Dubai"
      intro="Tighten, lift and rebuild collagen without surgery — with honest advice on what each technology can achieve for you."
      highlights={[
        ["No surgery", "Non-invasive"],
        ["1–3 days", "Downtime"],
        ["12+ months", "Results last"],
      ]}
      concerns={["Jawline laxity", "Sagging cheeks", "Neck laxity", "Loss of firmness", "Fine lines"]}
      txIntro="Our lifting technologies — chosen to match your skin and goals."
      treatments={[
        {
          name: "Morpheus8",
          body: "RF microneedling that tightens and remodels from within.",
          tags: ["Jawline", "Texture"],
          duration: "60 min · 1–2 days",
          price: "From AED 1,800",
        },
        {
          name: "Ultherapy",
          body: "Focused ultrasound that lifts brow, chin and neck.",
          tags: ["Lifting", "Neck"],
          duration: "60–90 min · None",
          price: "From AED 3,500",
        },
        {
          name: "PDO Threads",
          body: "Dissolvable threads for an instant subtle lift.",
          tags: ["Instant lift", "Contour"],
          duration: "45 min · 2–3 days",
          price: "From AED 3,000",
        },
        {
          name: "Fotona 4D",
          body: "Laser facelift that firms inside and out.",
          tags: ["Firmness", "Glow"],
          duration: "60 min · Minimal",
          price: "From AED 2,000",
        },
      ]}
      faqs={[
        {
          question: "Is there downtime?",
          answer: "Typically 1–3 days depending on the device.",
        },
        {
          question: "When will I see results?",
          answer: "Some lift is immediate; collagen builds over 3–6 months.",
        },
        {
          question: "Is it a facelift alternative?",
          answer: "For early laxity, yes; advanced sagging we'll advise honestly.",
        },
      ]}
      related={[
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/surgery", label: "Plastic Surgery" },
      ]}
      heroImage={heroImg}
      dental={false}
    />
  ),
});
