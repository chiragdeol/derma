import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-injectables.jpg";

export const Route = createFileRoute("/services/injectables")({
  head: () => ({
    meta: [
      { title: "Cosmetic Injectables — Lumière Clinic Dubai" },
      { name: "description", content: "Botox, dermal fillers, Profhilo and lip enhancement performed by medical doctors. Subtle, anatomical results." },
      { property: "og:title", content: "Cosmetic Injectables at Lumière" },
      { property: "og:description", content: "Anatomical injectables for natural, refined expression." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      heroImage={heroImg}
      eyebrow="Service · Injectables"
      titleLead="Cosmetic"
      titleItalic="Injectables."
      heroSubtitle="Botox, fillers and biostimulators — placed with precision by our medical team for movement that still feels like you."
      promiseTitleLead="Restraint over"
      promiseTitleItalic="excess."
      promiseBody="We build every injectable plan around your facial architecture. Conservative volumes, premium products and a long-view strategy that prevents the over-treated look so often seen in the region."
      treatmentsTitle="What we offer"
      treatments={[
        { name: "Botulinum toxin", body: "Soft-touch dosing to relax fine lines without freezing expression.", time: "20 min" },
        { name: "Dermal fillers", body: "Hyaluronic acid for cheeks, jawline, chin and tear-troughs.", time: "45 min" },
        { name: "Lip enhancement", body: "Hydration and definition — never volume for its own sake.", time: "30 min" },
        { name: "Profhilo & skin boosters", body: "Bio-remodelling for firmer, more luminous skin quality.", time: "30 min" },
        { name: "Polynucleotides", body: "Regenerative injections for under-eyes, neck and décolleté.", time: "30 min" },
        { name: "Fat-dissolving (Lemon Bottle)", body: "Targeted submental and small-area contour refinement.", time: "30 min" },
      ]}
      journey={[
        { step: "Consultation", body: "Facial mapping, medical history and a written, honest plan." },
        { step: "Treatment", body: "Performed only by licensed physicians using premium products." },
        { step: "Aftercare", body: "Topical regimen and lifestyle notes for optimal settling." },
        { step: "Review", body: "A two-week follow-up to refine and confirm the result." },
      ]}
    />
  ),
});
