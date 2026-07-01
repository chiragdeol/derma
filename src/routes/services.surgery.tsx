import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-surgery.jpg";

export const Route = createFileRoute("/services/surgery")({
  head: () => ({
    meta: [
      { title: "Plastic Surgery in Dubai | Rhinoplasty & Body — Al Nemah" },
      { name: "description", content: "Board-certified plastic surgery in Dubai — rhinoplasty, liposuction, eyelid and breast surgery in an accredited facility. Book a surgical consultation." },
      { property: "og:title", content: "Plastic Surgery at Al Nemah" },
      { property: "og:description", content: "Board-certified surgeons delivering considered, beautifully natural results." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Plastic Surgery"
      eyebrow="Surgery · Board-certified"
      metaTitle="Plastic Surgery in Dubai | Rhinoplasty & Body — Al Nemah"
      metaDesc="Board-certified plastic surgery in Dubai — rhinoplasty, liposuction, eyelid and breast surgery in an accredited facility. Book a surgical consultation."
      h1="Plastic Surgery in Dubai"
      intro="Board-certified surgeons delivering considered, beautifully natural results — in an accredited, fully supported environment."
      highlights={[
        ["Certified", "Surgeons"],
        ["Accredited", "Facility"],
        ["Full", "Aftercare"],
      ]}
      concerns={["Nose shape", "Stubborn fat", "Hooded eyes", "Breast shape", "Facial balance"]}
      txIntro="Our surgical procedures, each beginning with an in-depth consultation."
      treatments={[
        {
          name: "Rhinoplasty",
          body: "Nose reshaping for balance and easier breathing.",
          tags: ["Shape", "Function"],
          duration: "Surgery · 1–2 wk recovery",
          price: "On consultation",
        },
        {
          name: "Liposuction",
          body: "Targeted body contouring of stubborn fat.",
          tags: ["Contour", "Body"],
          duration: "Surgery · 1–2 wk recovery",
          price: "On consultation",
        },
        {
          name: "Blepharoplasty",
          body: "Eyelid surgery to refresh a tired, hooded look.",
          tags: ["Eyes", "Refresh"],
          duration: "Surgery · 1 wk recovery",
          price: "On consultation",
        },
        {
          name: "Breast Surgery",
          body: "Augmentation, reduction or lift for natural proportion.",
          tags: ["Shape", "Proportion"],
          duration: "Surgery · 2 wk recovery",
          price: "On consultation",
        },
      ]}
      faqs={[
        {
          question: "How do I know if I'm a candidate?",
          answer: "A consultation assesses your health, goals and expectations first.",
        },
        {
          question: "What's recovery like?",
          answer: "Most procedures need 1–2 weeks before normal activity.",
        },
        {
          question: "Will results look natural?",
          answer: "That's our priority — we plan around your features.",
        },
      ]}
      related={[
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
        { slug: "/services/skin", label: "Skin & HydraFacial" },
      ]}
      heroImage={heroImg}
      dental={false}
    />
  ),
});
