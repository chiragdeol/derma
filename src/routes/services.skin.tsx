import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-skin.jpg";

export const Route = createFileRoute("/services/skin")({
  head: () => ({
    meta: [
      { title: "Skin & HydraFacial — Lumière Clinic Dubai" },
      { name: "description", content: "Medical-grade facials, HydraFacial, mesotherapy, peels and microneedling for clear, luminous skin." },
      { property: "og:title", content: "Skin & HydraFacial at Lumière" },
      { property: "og:description", content: "Resurfacing and hydration protocols for visibly better skin." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      heroImage={heroImg}
      eyebrow="Service · Skin"
      titleLead="Skin &"
      titleItalic="HydraFacial."
      heroSubtitle="A complete skin programme — from medical diagnostics to signature facials that visibly transform tone, texture and clarity."
      promiseTitleLead="Healthy skin is"
      promiseTitleItalic="the foundation."
      promiseBody="Every treatment is matched to a Visia skin analysis and a personalised home routine. We never sell single sessions — we build progressive courses with measurable outcomes."
      treatmentsTitle="Facials & resurfacing"
      treatments={[
        { name: "Signature HydraFacial", body: "Cleanse, exfoliate, extract and infuse in one luxurious protocol.", time: "60 min" },
        { name: "Chemical peels", body: "Customised acid blends for pigmentation, texture and acne.", time: "45 min" },
        { name: "Microneedling RF", body: "Collagen induction with radiofrequency for firmer, smoother skin.", time: "75 min" },
        { name: "Mesotherapy", body: "Micro-injected vitamins and amino acids for deep nourishment.", time: "30 min" },
        { name: "BB Glow", body: "Semi-permanent luminosity through nano-channelling.", time: "60 min" },
        { name: "Dermaplaning", body: "Gentle exfoliation that leaves skin instantly smoother.", time: "30 min" },
      ]}
      journey={[
        { step: "Diagnosis", body: "Visia imaging, dermatologist review and a written plan." },
        { step: "In-clinic", body: "Course of facials or medical resurfacing as indicated." },
        { step: "Home routine", body: "Curated cosmeceuticals matched to your skin's needs." },
        { step: "Re-assessment", body: "Quarterly imaging to track measurable improvement." },
      ]}
    />
  ),
});
