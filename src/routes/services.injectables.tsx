import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-injectables.jpg";
import botoxImg from "@/assets/treatments/botox.png";
import dermalFillersImg from "@/assets/treatments/dermal-fillers.png";
import lipEnhancementImg from "@/assets/treatments/lip-enhancement.png";
import rejuranImg from "@/assets/treatments/rejuran-pn-therapy.png";
import sculptraImg from "@/assets/treatments/sculptra.png";

export const Route = createFileRoute("/services/injectables")({
  head: () => ({
    meta: [
      { title: "Botox, Fillers & Profhilo in Sharjah | Injectables — Al Nemah" },
      { name: "description", content: "Doctor-administered cosmetic injectables in Sharjah — Botox, dermal fillers, Profhilo and lip enhancement for natural, refined results. Book a consultation." },
      { property: "og:title", content: "Cosmetic Injectables at Al Nemah" },
      { property: "og:description", content: "Doctor-administered injectables for soft, natural rejuvenation." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Cosmetic Injectables"
      eyebrow="Dermatology · Injectables"
      metaTitle="Botox, Fillers & Profhilo in Sharjah | Injectables — Al Nemah"
      metaDesc="Doctor-administered cosmetic injectables in Sharjah — Botox, dermal fillers, Profhilo and lip enhancement for natural, refined results. Book a consultation."
      h1="Cosmetic Injectables in Sharjah"
      intro="Doctor-administered injectables for soft, natural rejuvenation — smoothing lines and restoring volume without ever looking overdone."
      highlights={[
        ["20–40 min", "Per session"],
        ["Minimal", "Downtime"],
        ["Doctor-led", "Every case"],
      ]}
      concerns={["Forehead lines", "Crow's feet", "Frown lines", "Volume loss", "Thin lips", "Skin laxity"]}
      txIntro="Our full cosmetic injectables menu — all final treatments and transparent pricing from our menu."
      treatments={[
        {
          name: "Botox",
          body: "Relaxes targeted facial muscles to soften forehead lines, frown lines, and crow's feet while maintaining natural expression.",
          tags: ["Wrinkles", "Prevention"],
          duration: "20 min · No downtime",
          price: "AED 750",
          image: botoxImg,
        },
        {
          name: "Dermal Fillers",
          body: "Restores youthfulness, structural contour, and balanced volume in cheeks, chin, jawline, and tear troughs.",
          tags: ["Volume", "Contour"],
          duration: "30–40 min · Minimal downtime",
          price: "AED 499 / ml",
          image: dermalFillersImg,
        },
        {
          name: "Profhilo",
          body: "Bio-remodeling treatment using ultra-pure hyaluronic acid to stimulate collagen, deep hydration, and firm skin laxity.",
          tags: ["Bio-Remodeling", "Deep Hydration"],
          duration: "20 min · No downtime",
          price: "AED 1,250",
          image: botoxImg,
        },
        {
          name: "Lip Enhancement",
          body: "Bespoke lip shaping, volume restoration, and border definition tailored for subtle natural symmetry.",
          tags: ["Lip Volume", "Symmetry"],
          duration: "30 min · Minimal downtime",
          price: "AED 999",
          image: lipEnhancementImg,
        },
        {
          name: "Sculptra",
          body: "Poly-L-lactic acid biostimulator that stimulates your body's own collagen production for long-lasting facial volumization.",
          tags: ["Collagen Biostimulator", "Long-Lasting"],
          duration: "40 min · Minimal downtime",
          price: "AED 1,999",
          image: sculptraImg,
        },
        {
          name: "Rejuran / PN Therapy",
          body: "Salmon DNA Polynucleotide cellular therapy to repair skin barrier, heal damaged tissue, and restore skin elasticity.",
          tags: ["Cellular Repair", "Salmon DNA"],
          duration: "30 min · Minimal downtime",
          price: "AED 1,999",
          image: rejuranImg,
        },
        {
          name: "Peptide Pens",
          body: "Advanced therapeutic peptide delivery to enhance skin cellular energy, fat metabolism, and skin regeneration.",
          tags: ["Peptides", "Regeneration"],
          duration: "20 min · No downtime",
          price: "AED 1,200",
          image: botoxImg,
        },
      ]}
      faqs={[
        {
          question: "Will I look frozen?",
          answer: "No — we dose conservatively so expression stays natural.",
        },
        {
          question: "How long does it last?",
          answer: "Anti-wrinkle 3–4 months; fillers 6–12 months by area.",
        },
        {
          question: "Does it hurt?",
          answer: "Minimal; fine needles and numbing keep it comfortable.",
        },
      ]}
      related={[
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/lifting", label: "Anti-Aging & Lifting" },
        { slug: "/services/laser", label: "Laser & Hair Removal" },
      ]}
      heroImage={heroImg}
      beforeImage={botoxImg}
      afterImage={lipEnhancementImg}
      dental={false}
    />
  ),
});
