import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/lifting-hifu.jpg";
import endoliftImg from "@/assets/lifting-endolift.jpg";
import hifuImg from "@/assets/lifting-hifu.jpg";
import morpheusImg from "@/assets/lifting-morpheus8.jpg";
import pdoThreadsImg from "@/assets/lifting-pdo-threads.jpg";
import fotona4dImg from "@/assets/lifting-fotona4d.jpg";

export const Route = createFileRoute("/services/lifting")({
  head: () => ({
    meta: [
      { title: "Non-Surgical Lifting in Sharjah | Morpheus8, Ultherapy, Endolift — Al Nemah" },
      { name: "description", content: "Non-surgical face lifting and skin tightening in Sharjah — Morpheus8, Ultherapy, Endolift, PDO threads and Fotona 4D. Lift and boost collagen without surgery." },
      { property: "og:title", content: "Anti-Aging & Lifting at Al Nemah" },
      { property: "og:description", content: "Tighten, lift and rebuild collagen without surgery." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dermatology & Aesthetics"
      divisionUrl="/services"
      categoryName="Anti-Aging & Lifting"
      eyebrow="Dermatology · Anti-Aging"
      metaTitle="Non-Surgical Lifting in Sharjah | Morpheus8, Ultherapy, Endolift — Al Nemah"
      metaDesc="Non-surgical face lifting and skin tightening in Sharjah — Morpheus8, Ultherapy, Endolift, PDO threads and Fotona 4D. Lift and boost collagen without surgery."
      h1="Anti-Aging & Lifting in Sharjah"
      intro="Tighten, lift and rebuild collagen without surgery — with honest advice on what each technology can achieve for you."
      highlights={[
        ["Non-surgical", "No scalpel, minimal downtime"],
        ["FDA-cleared", "Medical platforms"],
        ["12+ months", "Results last"],
      ]}
      concerns={["Jawline laxity", "Sagging cheeks", "Neck laxity", "Loss of firmness", "Fine lines"]}
      txIntro="Our anti-aging & lifting menu — all final treatments and transparent pricing from our menu."
      treatments={[
        {
          name: "Morpheus8",
          body: "Radiofrequency microneedling that remodels sub-dermal adipose tissue and stimulates deep collagen renewal.",
          tags: ["RF Microneedling", "Jawline"],
          duration: "60 min · 1–2 days pinkness",
          price: "AED 999",
          image: morpheusImg,
        },
        {
          name: "Endolift",
          body: "Advanced internal micro-optical fiber laser procedure that tightens lax skin and melts localized fat deposits.",
          tags: ["Internal Laser", "Subdermal Tightening"],
          duration: "60 min · 2–3 days mild swelling",
          price: "AED 2,499",
          image: endoliftImg,
        },
        {
          name: "HIFU",
          body: "High-Intensity Focused Ultrasound targeting deep SMAS layer to sculpt double chin, jawline, and cheeks.",
          tags: ["SMAS Lifting", "Double Chin"],
          duration: "45 min · No downtime",
          price: "AED 999",
          image: hifuImg,
        },
        {
          name: "PDO Threads",
          body: "Bio-absorbable polydioxanone threads placed underneath the skin to provide instant mechanical lifting and collagen synthesis.",
          tags: ["Instant Lift", "Thread Contour"],
          duration: "45 min · 2–3 days mild swelling",
          price: "AED 500 / thread",
          image: pdoThreadsImg,
        },
        {
          name: "Fotona 4D",
          body: "Non-invasive 4-step laser facelift treating exterior facial structures and interior oral cavity for comprehensive tightening.",
          tags: ["Laser Facelift", "Collagen Renewal"],
          duration: "60 min · Minimal downtime",
          price: "AED 2,999",
          image: fotona4dImg,
        },
        {
          name: "Ultherapy",
          body: "Micro-focused ultrasound energy to lift and tighten sagging skin on the brow, chin, jawline, and neck non-invasively.",
          tags: ["Ultrasound Lift", "Non-Surgical Facelift"],
          duration: "60–90 min · No downtime",
          price: "AED 2,999",
          image: hifuImg,
        },
      ]}
      faqs={[
        {
          question: "Is there downtime?",
          answer: "Typically 1–3 days depending on the device.",
        },
        {
          question: "When will I see results?",
          answer: "Some lift is immediate; collagen builds over 3–6 months.",
        },
        {
          question: "Is it a facelift alternative?",
          answer: "For early laxity, yes; advanced sagging we'll advise honestly.",
        },
      ]}
      related={[
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/surgery", label: "Plastic Surgery" },
      ]}
      heroImage={endoliftImg}
      dental={false}
    />
  ),
});
