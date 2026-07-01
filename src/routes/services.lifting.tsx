import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-lifting.jpg";

export const Route = createFileRoute("/services/lifting")({
  head: () => ({
    meta: [
      { title: "Anti-Aging & Lifting — Lumière Clinic Dubai" },
      { name: "description", content: "Morpheus8, Ultherapy, PDO threads and Fotona 4D — non-surgical tightening and collagen renewal." },
      { property: "og:title", content: "Anti-Aging at Lumière" },
      { property: "og:description", content: "Non-surgical lifting for visible firmness and contour." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      heroImage={heroImg}
      eyebrow="Service · Lifting"
      titleLead="Anti-Aging &"
      titleItalic="Lifting."
      heroSubtitle="Non-surgical tightening for the face, neck and body — using device platforms backed by clinical evidence."
      promiseTitleLead="Lift without"
      promiseTitleItalic="surgery."
      promiseBody="Our doctors combine energy-based devices and regenerative protocols to stimulate the skin's own collagen. The result is firmness that builds gradually — never the pulled, unnatural look."
      treatmentsTitle="Tightening & lifting"
      treatments={[
        { name: "Morpheus8", body: "Radiofrequency microneedling for jawline definition and skin quality.", time: "60 min" },
        { name: "Ultherapy", body: "Micro-focused ultrasound that lifts at the SMAS layer.", time: "60 – 90 min" },
        { name: "Fotona 4D", body: "Four-mode laser protocol for non-surgical face contouring.", time: "75 min" },
        { name: "PDO threads", body: "Absorbable threads to gently lift mid-face, brows or neck.", time: "60 min" },
        { name: "HIFU body", body: "High-intensity ultrasound for arms, abdomen and thighs.", time: "60 min" },
        { name: "Exosome therapy", body: "Regenerative boosters that amplify lifting protocols.", time: "30 min" },
      ]}
      journey={[
        { step: "Mapping", body: "Skin laxity grading and 3D imaging where indicated." },
        { step: "Stack", body: "Combination plan across devices for synergistic results." },
        { step: "Course", body: "Spaced sessions to build collagen progressively." },
        { step: "Maintain", body: "Annual top-ups keep the result stable for years." },
      ]}
    />
  ),
});
