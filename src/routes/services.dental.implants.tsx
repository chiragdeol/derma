import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/treatment-room.jpg";

export const Route = createFileRoute("/services/dental/implants")({
  head: () => ({
    meta: [
      { title: "Dental Implants in Dubai | Single & Full-Arch — Al Nemah" },
      { name: "description", content: "Permanent dental implants in Dubai — single, multiple and full-arch (All-on-4) with 3D-guided placement and a 98% success rate. Book a consultation." },
      { property: "og:title", content: "Dental Implants at Al Nemah" },
      { property: "og:description", content: "Replace missing teeth permanently with implants that look, feel and function like your own." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Dental Implants"
      eyebrow="Dental · Implants"
      metaTitle="Dental Implants in Dubai | Single & Full-Arch — Al Nemah"
      metaDesc="Permanent dental implants in Dubai — single, multiple and full-arch (All-on-4) with 3D-guided placement and a 98% success rate. Book a consultation."
      h1="Dental Implants in Dubai"
      intro="Replace missing teeth permanently with implants that look, feel and function like your own — planned with precise 3D guidance."
      highlights={[
        ["98%", "Success rate"],
        ["20+ years", "Longevity"],
        ["3D-guided", "Placement"],
      ]}
      concerns={["Missing tooth", "Multiple gaps", "Loose dentures", "Full-arch loss", "Bone loss"]}
      txIntro="From a single tooth to a full arch — our implant options."
      treatments={[
        {
          name: "Single Implant",
          body: "One titanium post and a natural-looking crown.",
          tags: ["1 tooth", "Permanent"],
          duration: "1–4 visits",
          price: "From AED 4,500",
        },
        {
          name: "Multiple Implants",
          body: "Restore several missing teeth with bridges on implants.",
          tags: ["Several teeth"],
          duration: "Varies",
          price: "On consultation",
        },
        {
          name: "Full-Arch (All-on-4)",
          body: "A fixed full arch supported by four implants.",
          tags: ["Full arch", "Fixed"],
          duration: "1–2 days placement",
          price: "From AED 25,000",
        },
        {
          name: "Bone Grafting",
          body: "Rebuilds bone so implants can be placed securely.",
          tags: ["Bone", "Foundation"],
          duration: "Varies",
          price: "From AED 2,000",
        },
      ]}
      faqs={[
        {
          question: "Does it hurt?",
          answer: "Placement is under local anaesthetic; most report little discomfort.",
        },
        {
          question: "How long do they last?",
          answer: "With good care, implants can last 20 years or a lifetime.",
        },
        {
          question: "Am I a candidate?",
          answer: "A 3D scan confirms bone; if needed we discuss grafting.",
        },
      ]}
      related={[
        { slug: "/services/dental/cosmetic-dentistry", label: "Cosmetic Dentistry & Veneers" },
        { slug: "/services/dental/general", label: "General & Preventive" },
        { slug: "/services/dental/orthodontics", label: "Orthodontics" },
      ]}
      heroImage={heroImg}
      dental={true}
    />
  ),
});
