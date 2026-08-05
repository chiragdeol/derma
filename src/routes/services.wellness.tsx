import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import wellnessImg from "@/assets/wellness.jpg";

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
      txIntro="Our wellness programs are built on diagnostics — sleep, stress, hormones, and micronutrients — so every treatment serves a longer arc of vitality."
      treatments={[
        {
          name: "IV Nutrient Therapy",
          body: "Tailored intravenous blends of vitamins, minerals, and antioxidants for instant hydration, energy, immunity, recovery, or radiance.",
          tags: ["Energy", "Immunity", "Radiance"],
          duration: "45 min · Direct absorption",
          price: "From AED 450",
          points: [
            "100% absorption compared to oral supplements",
            "Customized formulas (Myers' Cocktail, Glow/Detox, Immunity)",
            "Administered under strict medical supervision",
            "Instant rehydration and fatigue relief",
          ],
        },
        {
          name: "Lymphatic Drainage",
          body: "A specialised manual drainage technique to reduce inflammation, remove toxins, relieve fluid retention, and sculpt body contours.",
          tags: ["Detoxification", "Fluid Retention"],
          duration: "60 min",
          price: "From AED 400",
          points: [
            "Stimulates natural lymphatic circulation",
            "Reduces swelling and puffiness after travel or surgery",
            "Promotes deep relaxation and stress relief",
            "Supports immune system function",
          ],
        },
        {
          name: "Longevity & Biomarker Assessment",
          body: "Comprehensive diagnostic profiling, body composition analysis, and a personalized longevity program designed to optimize your biological age.",
          tags: ["Diagnostics", "Longevity"],
          duration: "120 min",
          price: "From AED 1200",
          points: [
            "Advanced hormone and nutrient blood panels",
            "InBody composition and metabolic rate analysis",
            "Specialist consultation and lifestyle coaching",
            "Personalized supplementation and therapy plan",
          ],
        },
        {
          name: "Non-Invasive Body Sculpting",
          body: "Advanced non-surgical technologies combining radiofrequency, cryolipolysis, and EMS to target stubborn fat and tone muscle.",
          tags: ["EMS", "Fat Reduction", "Muscle Toning"],
          duration: "45–60 min",
          price: "From AED 500",
          points: [
            "Targeted muscle stimulation and toning",
            "Safe, FDA-approved non-invasive platforms",
            "No downtime — return to activity immediately",
            "Best results in course programs",
          ],
        },
        {
          name: "Sleep & Stress Reset",
          body: "Multi-modal therapeutic sessions combining breathwork, red light therapy, and targeted relaxation protocols to reset your nervous system.",
          tags: ["Nervous System", "Sleep Quality"],
          duration: "75 min",
          price: "From AED 400",
          points: [
            "Reduces cellular stress and inflammation",
            "Optimizes circadian rhythms and sleep cycles",
            "Helps clear brain fog and mental fatigue",
            "Deeply calming for high-stress lifestyles",
          ],
        },
        {
          name: "Postpartum Recovery Protocol",
          body: "A gentle, doctor-led rehabilitation protocol designed to support tissue healing, balance hormones, and restore energy levels after childbirth.",
          tags: ["Postpartum", "Hormone Health"],
          duration: "Course program",
          price: "From AED 800",
          points: [
            "Pelvic floor and core tissue support",
            "Hormone balancing and nutrient replenishment",
            "Safe, gentle therapies customized to your recovery timeline",
            "Guided by certified specialists",
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
