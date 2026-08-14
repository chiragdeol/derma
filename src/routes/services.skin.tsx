import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/skin-hydrafacial-treatment.jpg";
import hydraFacialImg from "@/assets/treatments/hydra-facial.png";
import chemicalPeelImg from "@/assets/treatments/chemical-peel.png";
import mesotherapyImg from "@/assets/treatments/mesotherapy.png";
import microneedlingImg from "@/assets/treatments/microneedling.png";
import skinBoostersImg from "@/assets/treatments/skin-boosters.png";
import carbonLaserPeelImg from "@/assets/treatments/carbon-laser-peel.png";
import prpFacialImg from "@/assets/treatments/prp-facial-vampire-facial.png";

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
        ["From AED 299", "Starting price"],
        ["All skin types", "Safe for"],
      ]}
      concerns={["Dullness", "Congestion & acne", "Pigmentation", "Fine lines", "Dehydration", "Enlarged pores", "Acne scars"]}
      txIntro="Everything in our skin programme — all final treatments and transparent pricing from our menu."
      treatments={[
        {
          name: "HydraFacial",
          body: "Deeply cleanses, extracts, and hydrates the skin using super serums filled with antioxidants, peptides, and hyaluronic acid for an instant radiant glow.",
          tags: ["Cleanse", "Hydrate", "Glow"],
          duration: "30-45 min · No downtime",
          price: "AED 299",
          image: hydraFacialImg,
          points: [
            "Painless vortex extraction — no manual squeezing",
            "Customised serums for your skin concern",
            "Visible glow you can wear straight to an event",
            "Deep pore cleansing and hydration",
          ],
        },
        {
          name: "Chemical Peels",
          body: "Targeted medical-grade chemical exfoliation to treat acne, hyperpigmentation, uneven texture, and dullness.",
          tags: ["Acne", "Pigmentation", "Exfoliation"],
          duration: "30 min · Minimal flaking",
          price: "AED 399",
          image: chemicalPeelImg,
          points: [
            "Customized strength for your specific skin type",
            "Targets stubborn blemishes and dark spots",
            "Promotes fresh cellular turnover and smooth texture",
          ],
        },
        {
          name: "Mesotherapy",
          body: "Micro-injections of vitamins, minerals, amino acids, and hyaluronic acid directly into the skin for intense rejuvenation.",
          tags: ["Vitamin Boost", "Hydration"],
          duration: "30 min · Minimal downtime",
          price: "AED 499",
          image: mesotherapyImg,
          points: [
            "Delivers essential nutrients directly to dermis layer",
            "Restores skin radiance and elasticity",
            "Helps brighten and revive tired skin",
          ],
        },
        {
          name: "Microneedling",
          body: "Dermapen collagen induction therapy to stimulate natural collagen production, diminish acne scars, and refine pore size.",
          tags: ["Collagen Induction", "Acne Scars"],
          duration: "45 min · 24-48 hrs mild pinkness",
          price: "AED 499",
          image: microneedlingImg,
          points: [
            "Triggers natural collagen and elastin remodeling",
            "Smooths acne scars, fine lines, and enlarged pores",
            "Includes soothing post-procedure serum",
          ],
        },
        {
          name: "Skin Boosters",
          body: "Deep micro-injections of pure hyaluronic acid to hydrate, plump, and smooth skin from within for luminous radiance.",
          tags: ["Luminous Glow", "Deep Plumping"],
          duration: "30 min · Minimal downtime",
          price: "AED 699",
          image: skinBoostersImg,
          points: [
            "Restores long-lasting skin moisture and elasticity",
            "Smooths fine crepy lines and texture",
            "Natural-looking luminous dewiness",
          ],
        },
        {
          name: "Carbon Laser Peel (Hollywood Peel)",
          body: "Advanced laser facial using carbon lotion to deeply cleanse pores, exfoliate dead skin, and instantly boost skin luminosity.",
          tags: ["Hollywood Peel", "Deep Cleanse"],
          duration: "30 min · No downtime",
          price: "AED 399",
          image: carbonLaserPeelImg,
          points: [
            "Instant red-carpet ready skin glow",
            "Minimizes enlarged pores and controls excess oil",
            "Painless procedure with immediate results",
          ],
        },
        {
          name: "PRP Facial (Vampire Facial)",
          body: "Platelet-Rich Plasma harvested from your own blood, infused into the skin to accelerate cellular repair and youthful renewal.",
          tags: ["Platelet Rich Plasma", "Autologous Renewal"],
          duration: "45 min · Mild redness",
          price: "AED 399",
          image: prpFacialImg,
          points: [
            "100% natural healing using your body's growth factors",
            "Restores firmness, elasticity, and skin texture",
            "Combines microneedling with PRP for maximum impact",
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
      beforeImage={microneedlingImg}
      afterImage={hydraFacialImg}
      dental={false}
    />
  ),
});
