import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-dental.jpg";
import beforeImg from "@/assets/dental-before.png";
import afterImg from "@/assets/dental-after.png";

export const Route = createFileRoute("/services/dental/aesthetic-dentistry")({
  head: () => ({
    meta: [
      { title: "Aesthetic Dentistry & Hollywood Smile in Sharjah — Al Nemah" },
      { name: "description", content: "Transform your smile with advanced cosmetic dentistry in Sharjah. Natural porcelain veneers, Hollywood smile makeovers, laser whitening, and digital smile design." },
      { property: "og:title", content: "Aesthetic Dentistry at Al Nemah" },
      { property: "og:description", content: "Expert cosmetic dental care, custom smile makeovers, and veneers." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Aesthetic Dentistry"
      eyebrow="Dental · Cosmetic"
      metaTitle="Aesthetic Dentistry & Hollywood Smile in Sharjah — Al Nemah"
      metaDesc="Transform your smile with advanced cosmetic dentistry in Sharjah. Natural porcelain veneers, Hollywood smile makeovers, laser whitening, and digital smile design."
      h1="Aesthetic Dentistry in Sharjah"
      intro="Transform your smile with natural-looking cosmetic treatments — custom-designed digitally so you preview and approve your new look before we begin."
      highlights={[
        ["Digital", "Smile Design"],
        ["10+ Years", "Veneer Lifespan"],
        ["Pain-free", "Comfort Focus"],
      ]}
      concerns={["Stained & yellow teeth", "Chipped teeth", "Gaps between teeth", "Uneven tooth shape", "Worn down teeth", "Gummy smiles"]}
      txIntro="Our aesthetic dentistry menu — all final treatments, durations, and transparent pricing from our menu."
      treatments={[
        {
          name: "Porcelain Veneers",
          body: "Custom-shaded ultra-thin ceramic shells bonded to front teeth for flawless shade, shape, and harmony.",
          tags: ["Porcelain", "Hollywood Smile"],
          duration: "45 mins · Custom prep",
          price: "AED 1,499",
          points: [
            "Premium Ivoclar / German EMAX porcelain",
            "High stain resistance and natural translucency",
            "Custom digital shade mapping",
          ],
        },
        {
          name: "Teeth Whitening",
          body: "In-office professional whitening system to lift deep stains and brighten teeth 6-8 shades instantly.",
          tags: ["Instant Whitening", "Enamel Safe"],
          duration: "45 mins · No downtime",
          price: "AED 999",
          points: [
            "Enamel-safe, medically supervised formula",
            "Lifts coffee, tea, and tobacco discoloration",
            "Includes sensitivity prevention care",
          ],
        },
        {
          name: "Anterior Composite Restoration",
          body: "Direct tooth-colored composite resin sculpting for anterior front teeth to repair chips, gaps, and cracks.",
          tags: ["Front Teeth", "Composite Bonding"],
          duration: "20 mins · 1-Visit",
          price: "AED 799",
          points: [
            "Seamless color-matched resin bonding",
            "Preserves natural tooth structure",
            "Completed in a single appointment",
          ],
        },
        {
          name: "Anterior Zirconia Crowns",
          body: "High-strength aesthetic zirconia crowns designed specifically for anterior teeth to restore form and beauty.",
          tags: ["Zirconia", "Anterior Crown"],
          duration: "30 mins · Restoration",
          price: "AED 1,200",
          points: [
            "Biocompatible, metal-free translucent ceramic",
            "High fracture resistance",
            "Natural anatomical contours",
          ],
        },
        {
          name: "Invisalign",
          body: "Clear, removable aligner system to straighten teeth and correct bite alignment discreetly without metal wires.",
          tags: ["Clear Aligners", "Orthodontics"],
          duration: "10 mins · Scan & Consult",
          price: "AED 4,999",
          points: [
            "Nearly invisible transparent aligners",
            "Removable for easy eating and brushing",
            "Includes 3D digital treatment plan",
          ],
        },
        {
          name: "Snap On Smile",
          body: "Non-invasive removable custom arch that snaps over your existing teeth to give an instant beautiful smile.",
          tags: ["Removable Smile", "Non-Invasive"],
          duration: "30 mins · Impression",
          price: "AED 1,000",
          points: [
            "No drilling, no needles, no pain",
            "Removable custom dental appliance",
            "Quick instant smile solution",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do porcelain veneers look natural?",
          answer: "Yes, our porcelain veneers are custom-shaded and layered with varying levels of translucency to match the reflective properties of natural tooth enamel.",
        },
        {
          question: "How long do cosmetic veneers last?",
          answer: "Porcelain veneers commonly last between 10 and 15 years with proper oral hygiene and regular checkups. Composite bonding lasts about 5 to 7 years.",
        },
        {
          question: "Is the teeth whitening treatment safe for my enamel?",
          answer: "Absolutely. Our in-clinic laser whitening uses professional, pH-balanced formulas that safely break down deep stains without harming the mineral structure of your enamel.",
        },
        {
          question: "What is Digital Smile Design?",
          answer: "It is a planning tool where we take digital photos of your face and teeth to design your ideal smile on-screen. We can even create a temporary 3D model that you can try on in your mouth before we start.",
        },
        {
          question: "Will the procedures cause sensitivity?",
          answer: "Some patients experience mild, temporary sensitivity after teeth whitening or veneer preparation. We apply desensitizing agents during and after treatment to minimize discomfort.",
        },
      ]}
      related={[
        { slug: "/services/dental/clinical-dentistry", label: "Clinical Dentistry" },
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/injectables", label: "Cosmetic Injectables" },
      ]}
      heroImage={heroImg}
      dental={true}
      beforeImage={beforeImg}
      afterImage={afterImg}
    />
  ),
});
