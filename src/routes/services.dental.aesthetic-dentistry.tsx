import { Route as parentRoute } from "./../services";
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
      txIntro="Our cosmetic dentistry menu, from simple tooth repairs to complete smile makeovers."
      treatments={[
        {
          name: "Porcelain Veneers",
          body: "Custom-shaded ceramic shells bonded to the front of teeth to instantly correct shape, size, color, and spacing for a highly natural finish.",
          tags: ["Custom Shape", "Stain Resistant"],
          duration: "2–3 visits · Minimal prep",
          price: "From AED 1,500 / tooth",
          points: [
            "Premium, long-lasting porcelain material",
            "Individually hand-crafted by master technicians",
            "Requires only microscopic surface prep",
            "Extremely durable and stain-resistant",
          ],
        },
        {
          name: "Hollywood Smile Makeover",
          body: "A complete aesthetic transformation of your smile, utilizing comprehensive digital mapping to align and balance your teeth, lips, and facial features.",
          tags: ["Full Makeover", "Digital Preview"],
          duration: "2–4 visits · Full prep",
          price: "From AED 15,000",
          points: [
            "Full digital design customization",
            "Covers both upper and lower arches",
            "Includes temporary smile test-drive",
            "Custom translucency and color choices",
          ],
        },
        {
          name: "Teeth Whitening",
          body: "Safe, medical-grade teeth whitening using laser activation for instant results, or custom-molded take-home trays to brighten your smile at your own pace.",
          tags: ["Instant Glow", "Enamel Safe"],
          duration: "45–60 min · Zero downtime",
          price: "From AED 900",
          points: [
            "In-clinic laser whitening lifts up to 8 shades",
            "Enamel-safe, medically-supervised formula",
            "Custom take-home kits for long-term maintenance",
            "Includes sensitivity prevention treatment",
          ],
        },
        {
          name: "Composite Bonding",
          body: "A fast, non-invasive method using tooth-colored composite resin to rebuild chipped edges, close small gaps, and reshape teeth in a single visit.",
          tags: ["1-Visit Fix", "Non-Invasive"],
          duration: "30–60 min · Zero prep",
          price: "From AED 500",
          points: [
            "No drilling or tooth reduction required",
            "Completed in a single appointment",
            "Perfect for minor chips, cracks, or gaps",
            "Easily repairable and adjustable",
          ],
        },
        {
          name: "Shade Analysis & Smile Design",
          body: "Advanced digital photography and visual color matching using shade guides to plan your aesthetic goals and ensure absolute color harmony.",
          tags: ["Assessment", "Digital Planning"],
          duration: "15 min · Consult",
          price: "Complimentary with treatment",
          points: [
            "Visual and digital Vita shade guide mapping",
            "Predictable results before committing to veneers",
            "Dermatologist-aesthetician collaboration for facial symmetry",
            "Full clinical consultation included",
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
