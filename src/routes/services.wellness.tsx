import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import wellnessImg from "@/assets/wellness.jpg";
import glowIvImg from "@/assets/treatments/glow-iv-drip.png";
import vitaminCImg from "@/assets/treatments/vitamin-c-iv-therapy.png";
import nadImg from "@/assets/treatments/nad-therapy.png";
import immuneBoostImg from "@/assets/treatments/immune-boost-iv.png";
import hydrationIvImg from "@/assets/treatments/hydration-iv-therapy.png";
import beautyDripImg from "@/assets/treatments/beauty-drip.png";
import antiAgingIvImg from "@/assets/treatments/anti-aging-iv-therapy.png";

export const Route = createFileRoute("/services/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness & IV Drips in Sharjah | Restore Balance — Al Nemah" },
      { name: "description", content: "Advanced wellness and longevity therapies in Sharjah (New Muweilah). IV nutrient therapy, lymphatic drainage, body sculpting, and longevity assessments." },
      { property: "og:title", content: "Wellness & IV Drips at Al Nemah" },
      { property: "og:description", content: "Intravenous nutrients, postpartum recovery, sleep reset, and body sculpting in Sharjah." },
      { property: "og:image", content: wellnessImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Wellness & IV Drips"
      eyebrow="Wellness · Longevity"
      metaTitle="Wellness & IV Drips in Sharjah | Restore Balance — Al Nemah"
      metaDesc="Advanced wellness and longevity therapies in Sharjah (New Muweilah). IV nutrient therapy, lymphatic drainage, body sculpting, and longevity assessments."
      h1="Wellness & IV Drips"
      intro="Therapies and programs that restore balance from within — for energy, immunity, recovery, and a body that feels like home."
      highlights={[
        ["Diagnostics", "Personalised biomarkers"],
        ["Immunity & Energy", "Targeted IV formulas"],
        ["SHA Licensed", "Medical clinic safety"],
      ]}
      concerns={["Chronic fatigue", "Weakened immunity", "Hormonal imbalances", "Fluid retention", "Postpartum recovery", "Sleep issues & stress"]}
      txIntro="Our wellness & longevity menu — all final IV drips and transparent pricing from our menu."
      treatments={[
        {
          name: "Glow IV Drip",
          body: "High-dose Glutathione and Vitamin C infusion designed to detoxify cells and promote luminous skin radiance.",
          tags: ["Skin Glow", "Glutathione"],
          duration: "45 min · Direct absorption",
          price: "AED 299 / session",
          image: glowIvImg,
          points: [
            "100% bioavailability for rapid cell absorption",
            "Fights free radicals and reduces oxidative stress",
            "Promotes bright, luminous skin tone",
          ],
        },
        {
          name: "Vitamin C IV Therapy",
          body: "Concentrated Vitamin C infusion to strengthen immune defenses, boost collagen synthesis, and combat fatigue.",
          tags: ["Vitamin C", "Immunity"],
          duration: "45 min · Direct absorption",
          price: "AED 249 / session",
          image: vitaminCImg,
          points: [
            "Potent antioxidant immune system shield",
            "Encourages natural collagen tissue repair",
            "Ideal for fatigue and post-illness recovery",
          ],
        },
        {
          name: "NAD+ Therapy",
          body: "Nicotinamide Adenine Dinucleotide coenzyme infusion to recharge cellular mitochondria, boost brain clarity, and slow aging.",
          tags: ["Cellular Energy", "Brain Clarity"],
          duration: "60 min · Direct absorption",
          price: "AED 799 / session",
          image: nadImg,
          points: [
            "Recharges cellular energy and repair enzymes",
            "Enhances mental focus, memory, and stamina",
            "Gold standard anti-aging longevity therapy",
          ],
        },
        {
          name: "Immune Boost IV",
          body: "Comprehensive blend of Zinc, Vitamin C, B-Complex, and essential minerals to fortify immune response.",
          tags: ["Immune Fortification", "Zinc & B-Complex"],
          duration: "45 min · Direct absorption",
          price: "AED 799 / session",
          image: immuneBoostImg,
          points: [
            "Protects against seasonal viruses and infections",
            "Restores vital minerals lost during travel or stress",
            "Fast-acting defense and vitality booster",
          ],
        },
        {
          name: "Hydration IV Therapy",
          body: "Essential electrolyte and sterile saline solution to quickly restore hydration balance and relieve exhaustion.",
          tags: ["Rapid Hydration", "Electrolytes"],
          duration: "30 min · Direct absorption",
          price: "AED 299 / session",
          image: hydrationIvImg,
          points: [
            "Instantly rehydrates at a cellular level",
            "Relieves dehydration, headaches, and jet lag",
            "Flushes metabolic waste and toxins",
          ],
        },
        {
          name: "Beauty Drip",
          body: "Specialized cocktail of Biotin, Vitamin C, amino acids, and minerals to nourish hair, skin, and nails.",
          tags: ["Biotin", "Hair & Nails"],
          duration: "45 min · Direct absorption",
          price: "AED 299 / session",
          image: beautyDripImg,
          points: [
            "Strengthens hair roots and prevents brittleness",
            "Promotes healthy nail growth and skin elasticity",
            "Complete inner beauty nutritional protocol",
          ],
        },
        {
          name: "Anti-Aging IV Therapy",
          body: "Master longevity blend containing Alpha-Lipoic Acid, Glutathione, and essential micro-nutrients for total body rejuvenation.",
          tags: ["Longevity Blend", "Cell Renewal"],
          duration: "60 min · Direct absorption",
          price: "AED 799 / session",
          image: antiAgingIvImg,
          points: [
            "Combats cellular aging and inflammation",
            "Supports liver detoxification and arterial health",
            "Improves overall vital energy and skin firmness",
          ],
        },
      ]}
      faqs={[
        {
          question: "What is inside your IV drips?",
          answer: "Our drips are high-quality, clinical-grade mixtures of essential vitamins (like Vitamin C, B-complex), minerals (such as magnesium, zinc), amino acids, and powerful antioxidants like glutathione, dissolved in sterile saline for complete absorption.",
        },
        {
          question: "How do I know which IV drip is right for me?",
          answer: "Before your first drip, a medical specialist reviews your health history, symptoms, and wellness goals. We then recommend or customize a blend suited for you.",
        },
        {
          question: "What is the benefit of a longevity assessment?",
          answer: "Rather than waiting for symptoms, our biomarker assessments identify underlying imbalances in thyroid, adrenal health, vitamin levels, and inflammation, helping us build a preventative roadmap for your health.",
        },
        {
          question: "How often should I get lymphatic drainage?",
          answer: "For general wellness and detox, once or twice a month is ideal. For targeted goals like post-travel recovery or fluid reduction, a concentrated course of 3 to 5 weekly sessions is recommended.",
        },
        {
          question: "Are your wellness therapies safe?",
          answer: "Yes. All therapies at Al Nemah are conducted by licensed clinical nurses under the direct guidance of physicians, using approved materials in a fully sterile clinical environment.",
        },
      ]}
      related={[
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
      ]}
      heroImage={wellnessImg}
    />
  ),
});
