import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/treatment-hands.jpg";

export const Route = createFileRoute("/services/dental/cosmetic-dentistry")({
  head: () => ({
    meta: [
      { title: "Veneers & Hollywood Smile in Dubai — Al Nemah Dental" },
      { name: "description", content: "Natural veneers, Hollywood smile makeovers and bonding in Dubai with digital smile design. Fix chips, gaps and stains. Book a smile consultation." },
      { property: "og:title", content: "Cosmetic Dentistry & Veneers at Al Nemah" },
      { property: "og:description", content: "Transform your smile with natural-looking veneers and makeovers." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Cosmetic Dentistry & Veneers"
      eyebrow="Dental · Cosmetic"
      metaTitle="Veneers & Hollywood Smile in Dubai — Al Nemah Dental"
      metaDesc="Natural veneers, Hollywood smile makeovers and bonding in Dubai with digital smile design. Fix chips, gaps and stains. Book a smile consultation."
      h1="Cosmetic Dentistry & Veneers in Dubai"
      intro="Transform your smile with natural-looking veneers and full makeovers — designed digitally so you approve the look before treatment begins."
      highlights={[
        ["Digital", "Smile design"],
        ["10+ years", "Veneer lifespan"],
        ["No downtime", "Most cases"],
      ]}
      concerns={["Chipped teeth", "Gaps", "Discolouration", "Uneven shape", "Worn teeth"]}
      txIntro="Our cosmetic dentistry menu, from single fixes to a full smile makeover."
      treatments={[
        {
          name: "Porcelain Veneers",
          body: "Custom-shaded shells that correct shape, colour and gaps.",
          tags: ["Shape", "Colour"],
          duration: "2–3 visits",
          price: "From AED 1,500 / tooth",
        },
        {
          name: "Hollywood Smile",
          body: "A full smile makeover, digitally designed and previewed.",
          tags: ["Full makeover", "Preview"],
          duration: "2–4 visits",
          price: "From AED 15,000",
        },
        {
          name: "Composite Bonding",
          body: "Quick, affordable repair of chips and small gaps.",
          tags: ["Chips", "Gaps"],
          duration: "1 visit",
          price: "From AED 500",
        },
        {
          name: "Digital Smile Design",
          body: "On-screen preview of your new smile before we start.",
          tags: ["Preview", "Planning"],
          duration: "1 visit",
          price: "Complimentary",
        },
      ]}
      faqs={[
        {
          question: "Do veneers look natural?",
          answer: "Yes — custom shading and shaping blend them with your smile.",
        },
        {
          question: "How long do they last?",
          answer: "Porcelain veneers commonly last 10–15 years.",
        },
        {
          question: "Is much tooth removed?",
          answer: "Only a minimal layer; we preserve natural tooth.",
        },
      ]}
      related={[
        { slug: "/services/dental/whitening", label: "Teeth Whitening" },
        { slug: "/services/dental/implants", label: "Dental Implants" },
        { slug: "/services/dental/orthodontics", label: "Orthodontics" },
      ]}
      heroImage={heroImg}
      dental={true}
    />
  ),
});
