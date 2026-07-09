import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/services/dental/whitening")({
  head: () => ({
    meta: [
      { title: "Teeth Whitening in Sharjah | In-Clinic & Home — Al Nemah Dental" },
      { name: "description", content: "Professional teeth whitening in Sharjah — up to 8 shades brighter, enamel-safe, with in-clinic and take-home options. Book your whitening at Al Nemah." },
      { property: "og:title", content: "Teeth Whitening at Al Nemah" },
      { property: "og:description", content: "Brighten your smile safely by up to eight shades." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Teeth Whitening"
      eyebrow="Dental · Whitening"
      metaTitle="Teeth Whitening in Sharjah | In-Clinic & Home — Al Nemah Dental"
      metaDesc="Professional teeth whitening in Sharjah — up to 8 shades brighter, enamel-safe, with in-clinic and take-home options. Book your whitening at Al Nemah."
      h1="Teeth Whitening in Sharjah"
      intro="Brighten your smile safely by up to eight shades — in-clinic for instant results or a take-home kit at your own pace."
      highlights={[
        ["Up to 8 shades", "Results"],
        ["Enamel-safe", "Formula"],
        ["Same day", "In-clinic"],
      ]}
      concerns={["Coffee & tea stains", "Yellowing", "Dull smile", "Ageing teeth"]}
      txIntro="Choose the whitening approach that suits you."
      treatments={[
        {
          name: "In-Clinic Whitening",
          body: "Medical-grade gel activated for an immediate, even lift.",
          tags: ["Fast", "Even"],
          duration: "45–60 min",
          price: "From AED 900",
        },
        {
          name: "Take-Home Kit",
          body: "Custom trays and gel to whiten gradually at home.",
          tags: ["Flexible", "Top-up"],
          duration: "1–2 weeks",
          price: "From AED 700",
        },
        {
          name: "Combined Package",
          body: "In-clinic result plus a take-home kit to maintain it.",
          tags: ["Best value", "Lasting"],
          duration: "45 min + home",
          price: "From AED 1,300",
        },
      ]}
      faqs={[
        {
          question: "Is it safe for enamel?",
          answer: "Yes — professional gels whiten without damaging enamel.",
        },
        {
          question: "How long do results last?",
          answer: "Typically 12–18 months, longer with a top-up kit.",
        },
        {
          question: "Will it cause sensitivity?",
          answer: "Any sensitivity is mild and temporary; we can pre-treat.",
        },
      ]}
      related={[
        { slug: "/services/dental/cosmetic-dentistry", label: "Cosmetic Dentistry & Veneers" },
        { slug: "/services/dental/orthodontics", label: "Orthodontics" },
        { slug: "/services/dental/general", label: "General & Preventive" },
      ]}
      heroImage={heroImg}
      dental={true}
    />
  ),
});
