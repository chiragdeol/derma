import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-surgery.jpg";

export const Route = createFileRoute("/services/surgery")({
  head: () => ({
    meta: [
      { title: "Plastic Surgery — Lumière Clinic Dubai" },
      { name: "description", content: "Rhinoplasty, liposuction, eyelid surgery and breast procedures by board-certified plastic surgeons in Dubai." },
      { property: "og:title", content: "Plastic Surgery at Lumière" },
      { property: "og:description", content: "Board-certified surgeons for considered, beautifully natural results." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      heroImage={heroImg}
      eyebrow="Service · Surgery"
      titleLead="Plastic"
      titleItalic="Surgery."
      heroSubtitle="A small, board-certified surgical team — chosen for technique, ethics and a deep respect for natural proportion."
      promiseTitleLead="Considered. Conservative."
      promiseTitleItalic="Beautiful."
      promiseBody="We turn down more surgical requests than we accept. Every procedure follows multiple consultations, full medical work-up and a clear understanding of what surgery can — and cannot — change."
      treatmentsTitle="Surgical procedures"
      treatments={[
        { name: "Rhinoplasty", body: "Open and preservation techniques tailored to ethnic anatomy.", time: "Surgical" },
        { name: "Blepharoplasty", body: "Upper and lower eyelid surgery to refresh the eyes.", time: "Surgical" },
        { name: "Liposuction & VASER", body: "Body contouring with ultrasound-assisted precision.", time: "Surgical" },
        { name: "Breast surgery", body: "Augmentation, reduction and lift, planned around proportion.", time: "Surgical" },
        { name: "Mommy makeover", body: "Combined abdominoplasty and breast restoration after childbirth.", time: "Surgical" },
        { name: "Facelift / deep-plane", body: "Long-lasting structural rejuvenation for advanced laxity.", time: "Surgical" },
      ]}
      journey={[
        { step: "Consultation", body: "Two unhurried sessions before any surgical decision." },
        { step: "Work-up", body: "Full bloods, imaging and anaesthetic clearance." },
        { step: "Surgery", body: "Performed in a licensed, accredited hospital setting." },
        { step: "Recovery", body: "Concierge aftercare, lymphatic drainage and follow-ups." },
      ]}
      ctaTitle="Request a surgical consultation"
      ctaBody="All surgical enquiries are reviewed personally by our medical director."
    />
  ),
});
