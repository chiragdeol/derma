import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-skin.jpg";
import hydrafacialLogo from "@/assets/skin-hydrafacial-logo.png";

export const Route = createFileRoute("/services/skin")({
  head: () => ({
    meta: [
      { title: "Skin Treatments & HydraFacial in Sharjah — Al Nemah" },
      { name: "description", content: "Medical-grade skin treatments in Sharjah — HydraFacial, chemical peels, mesotherapy, microneedling and skin boosters. Clear, radiant skin with no downtime." },
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
      metaTitle="Skin Treatments & HydraFacial in Sharjah — Al Nemah"
      metaDesc="Medical-grade skin treatments in Sharjah — HydraFacial, chemical peels, mesotherapy, microneedling and skin boosters. Clear, radiant skin with no downtime."
      h1="Skin & HydraFacial in Sharjah"
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
          name: "Signature HydraFacial",
          body: "Deeply cleanses, extracts, and hydrates the skin using super serums filled with antioxidants, peptides, and hyaluronic acid.",
          tags: ["Cleanse", "Hydrate"],
          duration: "30 min · No downtime",
          price: "From AED 450",
          image: hydrafacialLogo,
          points: [
            "Painless vortex extraction — no manual squeezing",
            "Customised serums for your skin concern",
            "Visible glow you can wear straight to an event",
            "Safe monthly for long-term skin health",
          ],
        },
        {
          name: "Deluxe HydraFacial",
          body: "An invigorating treatment that includes all of the essentials of the Signature HydraFacial while addressing your specific skin concern with a customized Booster of your choice. This treatment also includes LED Light Therapy.",
          tags: ["Custom Booster", "LED Therapy"],
          duration: "45 min · No downtime",
          price: "From AED 650",
          image: hydrafacialLogo,
          points: [
            "Includes all Signature steps (cleanse, extract, hydrate)",
            "Targeted booster serum chosen for your skin type",
            "Professional LED light therapy to reduce redness/aging",
            "Intense custom glow and hydration",
          ],
        },
        {
          name: "Platinum HydraFacial",
          body: "The ultimate HydraFacial experience! Begin the detoxification process with Lymphatic Drainage. Then, the Signature HydraFacial deeply cleanses, exfoliates, extracts and hydrates the skin. Conclude with a Specialty Booster, LED Light Therapy, and a cooling mask.",
          tags: ["Lymphatic Drainage", "Full Reset"],
          duration: "60 min · No downtime",
          price: "From AED 850",
          image: hydrafacialLogo,
          points: [
            "Lymphatic drainage to reduce puffiness and flush toxins",
            "Full Signature cleanse, extraction, and hydration sequence",
            "Specialty booster and customized cooling treatment mask",
            "Includes calming LED light therapy",
          ],
        },
        {
          name: "Signature Glow Peel (Glycolic Acid)",
          body: "A gentle chemical exfoliation that removes dead skin cells, targets fine lines, and promotes a smooth, glowing complexion with minimal flaking.",
          tags: ["Brightening", "Fine Lines"],
          duration: "30 min · No downtime",
          price: "From AED 400",
          points: [
            "Ideal for dry, dull, or mature skin types",
            "No visible peeling or downtime required",
            "Promotes natural cellular turnover",
            "Best performed in a series of 3–6 sessions",
          ],
        },
        {
          name: "Clarifying Acne Peel (Salicylic Acid)",
          body: "A deep-cleansing peel designed to penetrate oily skin, unclog congested pores, reduce active acne, and control sebum production.",
          tags: ["Acne Control", "Pore Clarifying"],
          duration: "30 min · 1–2 days flaking",
          price: "From AED 450",
          points: [
            "Specifically targets acne, blackheads, and congestion",
            "Reduces inflammation and skin redness",
            "Controls shine and oily zones",
            "Includes post-peel soothing hydration",
          ],
        },
        {
          name: "Deep Resurfacing TCA Peel",
          body: "A medium-depth peel that treats deep wrinkles, acne scarring, sun damage, and pigmentation. Triggers active skin peeling for a complete reset.",
          tags: ["Scar Revision", "Deep Pigment"],
          duration: "45 min · 5–7 days peeling",
          price: "From AED 600",
          points: [
            "Addresses deeper skin texture concerns and hyperpigmentation",
            "Triggers a visible peeling process over 5–7 days",
            "Reveals fresh, baby-smooth skin underneath",
            "Prescription aftercare kit included",
          ],
        },
        {
          name: "Radiance Glow Mesotherapy",
          body: "Micro-injections of hyaluronic acid, vitamins, and antioxidants directly into the face and neck to revive tired, dehydrated skin instantly.",
          tags: ["Face & Neck", "Vitamin Boost"],
          duration: "30 min · No downtime",
          price: "From AED 600",
          points: [
            "Delivers active nutrients directly into the dermis",
            "Boosts skin glow, firmness, and hydration",
            "Ideal for a quick skin pick-me-up before big events",
            "Virtually painless with ultrafine needles",
          ],
        },
        {
          name: "Hair Rejuvenation Mesotherapy",
          body: "Scalp micro-injections loaded with peptides, amino acids, and growth factors to stimulate circulation, strengthen follicles, and reduce hair thinning.",
          tags: ["Scalp Care", "Thinning Hair"],
          duration: "30 min · No downtime",
          price: "From AED 700",
          points: [
            "Feeds nutrients directly to the hair roots",
            "Stimulates dormant follicles and promotes new growth",
            "Helps fight seasonal and stress-related hair fall",
            "Minimal discomfort, return to daily work immediately",
          ],
        },
        {
          name: "Collagen & Firming Mesotherapy",
          body: "Polynucleotide and peptide blends injected to target early signs of skin laxity, encouraging the skin to naturally produce new collagen.",
          tags: ["Skin Laxity", "Collagen Renewal"],
          duration: "45 min · No downtime",
          price: "From AED 800",
          points: [
            "Targets fine lines around eyes, cheeks, and neck",
            "Strengthens skin elasticity and thickness",
            "Uses advanced bio-compatible firming complexes",
            "Excellent long-term preventative aging therapy",
          ],
        },
        {
          name: "Contouring Lipolytic Mesotherapy",
          body: "Targeted micro-injections of mild fat-dissolving agents to refine and contour localized areas like the double chin or jawline.",
          tags: ["Jawline Contour", "Double Chin"],
          duration: "30 min · 1–2 days swelling",
          price: "From AED 900",
          points: [
            "Gently dissolves small pockets of fat",
            "Sharpens jawline and chin profile view",
            "Best results achieved in a series of 2–4 treatments",
            "Clinically proven, non-surgical method",
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
          answer: "A dermatologist assesses your skin and builds a plan — often a combination of treatments like HydraFacial and customized peels works best.",
        },
        {
          question: "What is the difference between the HydraFacial variations?",
          answer: "Our Signature HydraFacial covers the core 3 steps (cleanse, extract, hydrate). The Deluxe adds customized booster serums and LED light therapy. The Platinum is our ultimate experience, incorporating lymphatic drainage and a cooling treatment mask.",
        },
        {
          question: "Are chemical peels painful, and what is the recovery like?",
          answer: "Superficial peels (like Glycolic or Salicylic) cause only mild tingling during application and very light flaking for 2–3 days. Medium-depth peels (like TCA) have a warm sensation and require 5–7 days of downtime as the skin exfoliates to reveal a brighter, smoother layer.",
        },
        {
          question: "How often should I get Mesotherapy or Microneedling?",
          answer: "For optimal results, we recommend a series of 3 to 4 sessions spaced 4 weeks apart. Single sessions are excellent for an instant boost, but cumulative sessions yield lasting collagen renewal and texture improvement.",
        },
        {
          question: "Can I combine skin boosters with other treatments?",
          answer: "Yes, skin boosters like Profhilo pair beautifully with micro-needling or light chemical peels. We schedule them sequentially to allow the skin to repair and absorb the active nutrients deeply.",
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
