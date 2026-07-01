import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-laser.jpg";

export const Route = createFileRoute("/services/laser")({
  head: () => ({
    meta: [
      { title: "Laser Hair Removal in Dubai | Safe All Skin Types — Al Nemah" },
      { name: "description", content: "Advanced laser in Dubai — hair removal safe on dark skin, plus pigmentation, vascular and tattoo removal. Book a patch test at Al Nemah." },
      { property: "og:title", content: "Laser & Hair Removal at Al Nemah" },
      { property: "og:description", content: "Advanced laser platforms for lasting hair reduction and clearer skin." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Laser & Hair Removal"
      eyebrow="Dermatology · Laser"
      metaTitle="Laser Hair Removal in Dubai | Safe All Skin Types — Al Nemah"
      metaDesc="Advanced laser in Dubai — hair removal safe on dark skin, plus pigmentation, vascular and tattoo removal. Book a patch test at Al Nemah."
      h1="Laser & Hair Removal in Dubai"
      intro="Advanced laser platforms for lasting hair reduction and clearer skin — calibrated safely for every skin tone."
      highlights={[
        ["All tones", "Safe for"],
        ["No downtime", "Most treatments"],
        ["From AED 300", "Starting price"],
      ]}
      concerns={["Unwanted hair", "Sun spots", "Melasma", "Thread veins", "Redness", "Tattoos"]}
      txIntro="Our laser menu covers hair, pigment and vascular concerns."
      treatments={[
        {
          name: "Laser Hair Removal",
          body: "Long-term hair reduction, safe on brown and dark skin.",
          tags: ["Face", "Body"],
          duration: "15–60 min · No downtime",
          price: "From AED 300",
        },
        {
          name: "Pigmentation Laser",
          body: "Targets sun spots, melasma and uneven tone.",
          tags: ["Sun spots", "Melasma"],
          duration: "30 min · Mild",
          price: "From AED 500",
        },
        {
          name: "Vascular Laser",
          body: "Clears thread veins, redness and rosacea.",
          tags: ["Veins", "Redness"],
          duration: "30 min · Mild",
          price: "From AED 500",
        },
        {
          name: "Tattoo Removal",
          body: "Q-switched laser fades unwanted ink over sessions.",
          tags: ["Tattoos"],
          duration: "15–30 min · Mild",
          price: "From AED 400",
        },
        {
          name: "Carbon Laser Facial",
          body: "A gentle 'glow' laser for pores and radiance.",
          tags: ["Pores", "Glow"],
          duration: "30 min · No downtime",
          price: "From AED 600",
        },
      ]}
      faqs={[
        {
          question: "Is it safe for dark skin?",
          answer: "Yes — our devices are calibrated for brown and dark tones.",
        },
        {
          question: "How many sessions?",
          answer: "Hair removal usually needs 6–8 sessions.",
        },
        {
          question: "Is it painful?",
          answer: "A mild snap with built-in cooling; very tolerable.",
        },
      ]}
      related={[
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
      ]}
      heroImage={heroImg}
      dental={false}
    />
  ),
});
