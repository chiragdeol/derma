import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/wellness.jpg";

export const Route = createFileRoute("/services/dental/orthodontics")({
  head: () => ({
    meta: [
      { title: "Invisalign & Braces in Sharjah | Orthodontics — Al Nemah Dental" },
      { name: "description", content: "Straighten teeth in Sharjah with Invisalign clear aligners, ceramic or metal braces. 3D digital planning, flexible payments, free consultation." },
      { property: "og:title", content: "Orthodontics & Invisalign at Al Nemah Dental" },
      { property: "og:description", content: "Straighten your teeth discreetly with clear aligners or modern braces." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Orthodontics & Invisalign"
      eyebrow="Dental · Orthodontics"
      metaTitle="Invisalign & Braces in Sharjah | Orthodontics — Al Nemah Dental"
      metaDesc="Straighten teeth in Sharjah with Invisalign clear aligners, ceramic or metal braces. 3D digital planning, flexible payments, free consultation."
      h1="Orthodontics & Invisalign in Sharjah"
      intro="Straighten your teeth discreetly with clear aligners or modern braces — planned with 3D imaging so you preview the result first."
      highlights={[
        ["Free", "Consultation"],
        ["3D preview", "Planning"],
        ["Payment plans", "Available"],
      ]}
      concerns={["Crowded teeth", "Gaps", "Overbite", "Underbite", "Crossbite"]}
      txIntro="Every way we straighten teeth — chosen to fit your case and lifestyle."
      treatments={[
        {
          name: "Invisalign Clear Aligners",
          body: "Nearly invisible removable aligners for adults and teens.",
          tags: ["Discreet", "Removable"],
          duration: "6–18 months",
          price: "From AED 12,000",
        },
        {
          name: "Ceramic Braces",
          body: "Tooth-coloured fixed braces that blend in.",
          tags: ["Subtle", "Fixed"],
          duration: "12–24 months",
          price: "From AED 9,000",
        },
        {
          name: "Metal Braces",
          body: "Reliable fixed braces for complex corrections.",
          tags: ["Effective", "Complex cases"],
          duration: "12–24 months",
          price: "From AED 8,000",
        },
        {
          name: "Bite Correction",
          body: "Fixing over-, under- and crossbites for function.",
          tags: ["Bite", "Function"],
          duration: "Varies",
          price: "On consultation",
        },
      ]}
      faqs={[
        {
          question: "Invisalign or braces?",
          answer: "Invisalign suits most adult cases; braces handle complex ones. We advise after a scan.",
        },
        {
          question: "How long does it take?",
          answer: "Most cases finish in 6–18 months.",
        },
        {
          question: "Is it painful?",
          answer: "Mild pressure after adjustments, settling quickly.",
        },
      ]}
      related={[
        { slug: "/services/dental/cosmetic-dentistry", label: "Cosmetic Dentistry & Veneers" },
        { slug: "/services/dental/whitening", label: "Teeth Whitening" },
        { slug: "/services/dental/general", label: "General & Preventive" },
      ]}
      heroImage={heroImg}
      dental={true}
    />
  ),
});
