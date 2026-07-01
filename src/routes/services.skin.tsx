import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-skin.jpg";

export const Route = createFileRoute("/services/skin")({
  head: () => ({
    meta: [
      { title: "Skin Treatments & HydraFacial in Dubai — Al Nemah" },
      { name: "description", content: "Medical-grade skin treatments in Dubai — HydraFacial, chemical peels, mesotherapy, microneedling and skin boosters. Clear, radiant skin with no downtime." },
      { property: "og:title", content: "Skin & HydraFacial at Al Nemah" },
      { property: "og:description", content: "Medical-grade facials and skin resurfacing that clear, hydrate and renew." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Skin & HydraFacial"
      eyebrow="Dermatology · Skin"
      metaTitle="Skin Treatments & HydraFacial in Dubai — Al Nemah"
      metaDesc="Medical-grade skin treatments in Dubai — HydraFacial, chemical peels, mesotherapy, microneedling and skin boosters. Clear, radiant skin with no downtime."
      h1="Skin & HydraFacial in Dubai"
      intro="Medical-grade facials and skin resurfacing that clear, hydrate and renew — every protocol customised by a dermatologist to your skin."
      highlights={[
        ["No downtime", "Most treatments"],
        ["From AED 400", "Starting price"],
        ["All skin types", "Safe for"],
      ]}
      concerns={["Dullness", "Congestion & acne", "Pigmentation", "Fine lines", "Dehydration", "Enlarged pores", "Acne scars"]}
      txIntro="Everything in our skin programme — choose a single treatment or combine them into a plan."
      treatments={[
        {
          name: "HydraFacial",
          body: "Deep-cleansing 3-step facial that exfoliates, extracts and hydrates for instant glow.",
          tags: ["Dullness", "Congestion"],
          duration: "45–60 min · No downtime",
          price: "From AED 450",
          points: [
            "Painless vortex extraction — no manual squeezing",
            "Customised serums for your skin concern",
            "Visible glow you can wear straight to an event",
            "Safe monthly for long-term skin health",
          ],
        },
        {
          name: "Chemical Peels",
          body: "Resurfacing acid blends that even tone and smooth texture over a course.",
          tags: ["Pigmentation", "Acne scars"],
          duration: "30 min · Mild downtime",
          price: "From AED 400",
          points: [
            "Superficial to medium depth, chosen for your skin",
            "Targets pigmentation, acne marks and dullness",
            "Best as a course of 3–6 sessions",
            "Prescription aftercare included",
          ],
        },
        {
          name: "Mesotherapy",
          body: "Micro-injections of vitamins and antioxidants to revive tired, dehydrated skin.",
          tags: ["Glow", "Hydration"],
          duration: "30–45 min · No downtime",
          price: "From AED 600",
          points: [
            "A cocktail tailored to skin or hair goals",
            "Boosts hydration, radiance and firmness",
            "Virtually no downtime",
            "Great before a big occasion",
          ],
        },
        {
          name: "Microneedling",
          body: "Collagen-induction therapy that refines scars, pores and overall texture.",
          tags: ["Scars", "Texture"],
          duration: "45 min · 1 day redness",
          price: "From AED 500",
          points: [
            "Stimulates your own collagen production",
            "Softens acne scars and enlarged pores",
            "Can be paired with growth-factor serums",
            "Results build over several sessions",
          ],
        },
        {
          name: "Skin Boosters",
          body: "Injectable hydration (incl. Profhilo) that plumps and firms from within.",
          tags: ["Laxity", "Dehydration"],
          duration: "30 min · No downtime",
          price: "From AED 1,200",
          points: [
            "Deep, long-lasting hydration under the skin",
            "Improves fine lines and skin quality",
            "Subtle firming without adding volume",
            "Typically two sessions, then maintenance",
          ],
        },
      ]}
      faqs={[
        {
          question: "How do I know which skin treatment I need?",
          answer: "A dermatologist assesses your skin and builds a plan — often a combination works best.",
        },
        {
          question: "Is there any downtime?",
          answer: "Most treatments have none; peels and microneedling may cause a day of mild redness.",
        },
        {
          question: "How soon will I see results?",
          answer: "HydraFacial glows immediately; peels and microneedling build over a few sessions.",
        },
      ]}
      related={[
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
        { slug: "/services/laser", label: "Laser & Hair Removal" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
      ]}
      heroImage={heroImg}
      dental={false}
    />
  ),
});
