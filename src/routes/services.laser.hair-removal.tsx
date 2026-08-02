import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-laser.jpg";

export const Route = createFileRoute("/services/laser/hair-removal")({
  head: () => ({
    meta: [
      { title: "Laser Hair Removal in Sharjah | Safe All Skin Types — Al Nemah" },
      { name: "description", content: "Advanced laser hair removal in Sharjah (New Muweilah) — safe for dark, brown & light skin tones. Long-lasting results for face and body. Free consultation." },
      { property: "og:title", content: "Laser Hair Removal at Al Nemah" },
      { property: "og:description", content: "Advanced laser platforms for lasting hair reduction and clearer skin. Calibrated safely for every skin tone." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Laser Hair Removal"
      eyebrow="Dermatology · Laser"
      metaTitle="Laser Hair Removal in Sharjah | Safe All Skin Types — Al Nemah"
      metaDesc="Advanced laser hair removal in Sharjah (New Muweilah) — safe for dark, brown & light skin tones. Long-lasting results for face and body. Free consultation."
      h1="Laser Hair Removal in Sharjah"
      intro="Long-lasting, comfortable hair reduction for face and body — for women and men. Advanced lasers calibrated safely for brown and dark skin, at a fully accredited, safety-first clinic in Sharjah."
      highlights={[
        ["All tones", "Safe for Fitzpatrick IV–VI"],
        ["No pain", "Built-in cooling comfort"],
        ["Accredited", "SHA-licensed specialists"],
      ]}
      concerns={["Unwanted body hair", "Razor burns", "Ingrown hairs", "Beard-line shaping", "Stubborn hair growth"]}
      txIntro="Laser hair removal works across the face and body for both women and men. Your plan is tailored to the area and your hair and skin type."
      treatments={[
        {
          name: "Full Body Package",
          body: "Complete coverage in discounted package sessions. Best value per area.",
          tags: ["Men & Women", "Full Body"],
          duration: "60–90 min · Course of 6–8 sessions",
          price: "From AED 850",
        },
        {
          name: "Underarms",
          body: "Quick, highly popular area — often just minutes per session.",
          tags: ["Underarms"],
          duration: "15 min · Quick",
          price: "From AED 300",
        },
        {
          name: "Bikini & Brazilian",
          body: "Precise, private care in sensitive areas with ultimate comfort.",
          tags: ["Bikini", "Sensitive Areas"],
          duration: "20–30 min",
          price: "From AED 400",
        },
        {
          name: "Legs & Arms",
          body: "Long-lasting smoothness over larger surface areas.",
          tags: ["Legs", "Arms"],
          duration: "30–45 min",
          price: "From AED 500",
        },
        {
          name: "Face & Upper Lip",
          body: "Gentle settings tailored for delicate facial skin.",
          tags: ["Face", "Upper Lip"],
          duration: "15 min",
          price: "From AED 350",
        },
        {
          name: "Men's Specialised Back & Beard",
          body: "Full back coverage, chest hair reduction, and sharp beard-line contouring.",
          tags: ["Men", "Back & Beard"],
          duration: "20–40 min",
          price: "From AED 400",
        },
      ]}
      faqs={[
        {
          question: "Is laser hair removal safe for dark skin?",
          answer: "Yes. We use advanced laser systems suited to darker and brown (Fitzpatrick IV–VI) skin tones, and a patch test is carried out before every new course to confirm the safest settings for you.",
        },
        {
          question: "How many sessions will I need?",
          answer: "Most people need around 6 to 8 sessions spaced a few weeks apart, because hair grows in cycles. Your exact plan depends on the area and your hair and skin type, and is confirmed at consultation.",
        },
        {
          question: "How much does laser hair removal cost?",
          answer: "Laser hair removal at Al Nemah starts from AED 300 per small area, with discounted full-body and package pricing. Your final price is confirmed at a free consultation.",
        },
        {
          question: "Does it hurt?",
          answer: "Most patients describe a mild snapping sensation. Our devices include built-in cooling to keep treatment comfortable, and numbing can be applied to sensitive areas.",
        },
        {
          question: "Is it permanent?",
          answer: "Laser hair removal provides long-lasting hair reduction rather than permanent removal. Most people enjoy months to years of smoothness, with occasional maintenance sessions.",
        },
      ]}
      related={[
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
      ]}
      heroImage={heroImg}
    />
  ),
});
