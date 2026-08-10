import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/treatment-room.jpg";
import beforeImg from "@/assets/dental-before.png";
import afterImg from "@/assets/dental-after.png";

export const Route = createFileRoute("/services/dental/clinical-dentistry")({
  head: () => ({
    meta: [
      { title: "Clinical & General Dentistry in Sharjah — Al Nemah" },
      { name: "description", content: "Expert clinical dental care in Sharjah. Dental implants, orthodontics, general checkups, root canals, and children's dentistry. Schedule a consultation." },
      { property: "og:title", content: "Clinical Dentistry at Al Nemah" },
      { property: "og:description", content: "Comprehensive dental care, implants, and braces for the whole family." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="Clinical Dentistry"
      eyebrow="Dental · Clinical"
      metaTitle="Clinical & General Dentistry in Sharjah — Al Nemah"
      metaDesc="Expert clinical dental care in Sharjah. Dental implants, orthodontics, general checkups, root canals, and children's dentistry. Schedule a consultation."
      h1="Clinical Dentistry in Sharjah"
      intro="Expert dental care for the entire family — from preventive checkups and deep cleanings to advanced dental implants and orthodontic alignments."
      highlights={[
        ["Accredited", "MOH Licensed"],
        ["Advanced", "3D Diagnostics"],
        ["Gentle", "Pain-free Focus"],
      ]}
      concerns={["Toothaches & pain", "Missing teeth", "Crooked or crowded teeth", "Bleeding or sore gums", "Decayed teeth", "Impacted wisdom teeth"]}
      txIntro="Our clinical dentistry menu — all final preventative, restorative, surgical, and pediatric treatments with transparent pricing."
      treatments={[
        {
          name: "Clinical Examination & X-Rays",
          body: "Comprehensive oral health examination, digital diagnosis, and diagnostic X-rays to detect dental issues early.",
          tags: ["Examination", "Diagnostics"],
          duration: "10 mins",
          price: "AED 300",
          points: [
            "Full digital oral checkup and consultation",
            "Targeted intra-oral digital X-rays",
            "Personalized oral health roadmap",
          ],
        },
        {
          name: "Scaling & Polishing",
          body: "Professional calculus and plaque removal to prevent gum disease and restore clean, fresh teeth.",
          tags: ["Plaque Removal", "Gum Health"],
          duration: "20–30 mins",
          price: "AED 300",
          points: [
            "Painless ultrasonic calculus removal",
            "Removes surface stains and food pigments",
            "Keeps gums healthy and firm",
          ],
        },
        {
          name: "Fluoride & Sealants",
          body: "Protective fluoride varnish and pit & fissure sealants to fortify enamel and block cavity-causing bacteria.",
          tags: ["Cavity Defense", "Enamel Shield"],
          duration: "10 mins",
          price: "AED 250",
          points: [
            "Strengthens weakened enamel",
            "Prevents tooth decay in deep grooves",
            "Ideal for children and adults",
          ],
        },
        {
          name: "Restorative Fillings (GIC / Composite)",
          body: "Glass Ionomer and posterior composite resin fillings to restore decayed or damaged tooth structure.",
          tags: ["Restorative", "Tooth-Colored"],
          duration: "10 mins",
          price: "AED 300 - AED 600",
          points: [
            "Seamless color-matched aesthetic filling",
            "Preserves maximum tooth structure",
            "Strong, durable bite restoration",
          ],
        },
        {
          name: "Root Canal Treatment",
          body: "Painless endodontic therapy to remove infected pulp, clean canals, and save the natural tooth.",
          tags: ["Endodontics", "Pain Relief"],
          duration: "1 hour",
          price: "AED 800",
          points: [
            "Relieves severe toothache and infection",
            "Saves natural tooth from extraction",
            "Sealed under sterile local anesthesia",
          ],
        },
        {
          name: "Crowns & Bridges",
          body: "Custom-crafted protective crowns and multi-unit dental bridges to rebuild compromised teeth or fill gaps.",
          tags: ["Crowns", "Bridges"],
          duration: "30 mins",
          price: "AED 1,000",
          points: [
            "Protects weak, root-canaled teeth",
            "Restores full chewing alignment and strength",
            "Custom shade-matched finish",
          ],
        },
        {
          name: "Tooth Extractions (Simple / Surgical)",
          body: "Gentle removal of non-restorable, broken, or impacted teeth using pain-free surgical techniques.",
          tags: ["Extractions", "Surgical"],
          duration: "10–30 mins",
          price: "AED 400 - AED 600",
          points: [
            "Gentle, pain-free local anesthesia",
            "Minimizes tissue trauma for fast healing",
            "Detailed post-extraction aftercare",
          ],
        },
        {
          name: "Wisdom Tooth Extraction",
          body: "Specialized surgical extraction of impacted or painful 3rd molars under sterile surgical conditions.",
          tags: ["Wisdom Teeth", "Molar Surgery"],
          duration: "Case dependent",
          price: "AED 1,500",
          points: [
            "Relieves wisdom tooth pressure and impaction pain",
            "Prevents crowding and adjacent molar damage",
            "Comfortable surgical recovery care",
          ],
        },
        {
          name: "Dental Implants",
          body: "Permanent titanium post embedded in jawbone to serve as a lifelong foundation for missing teeth.",
          tags: ["Dental Implants", "Permanent Teeth"],
          duration: "1 hour",
          price: "AED 3,499",
          points: [
            "Gold standard solution for missing teeth",
            "Preserves jawbone density and facial aesthetics",
            "High success rate and long-term durability",
          ],
        },
        {
          name: "Orthodontic Braces & Retainers",
          body: "Traditional braces and post-ortho retainer appliances to align teeth and lock in perfect positioning.",
          tags: ["Traditional Braces", "Retainers"],
          duration: "1-2 hours",
          price: "AED 4,500 (Braces) / AED 1,200 (Retainer)",
          points: [
            "Corrects bite alignment, crowding, and gaps",
            "Durable precision metal/ceramic brackets",
            "Includes post-treatment retention options",
          ],
        },
        {
          name: "Complete Dentures & RPD",
          body: "Custom removable full dentures and removable partial dentures (RPD) for full arch tooth replacement.",
          tags: ["Dentures", "Prosthodontics"],
          duration: "30 mins",
          price: "AED 500 - AED 10,000",
          points: [
            "Restores complete chewing ability and speech",
            "Natural aesthetic gum and tooth appearance",
            "Comfortable custom fit",
          ],
        },
        {
          name: "Pediatric Dentistry (Pedodontics)",
          body: "Gentle child-friendly dental care including pediatric GIC fillings, pulpotomy, pulpectomy, and crowns.",
          tags: ["Kids Care", "Pedodontics"],
          duration: "10–30 mins",
          price: "AED 200 - AED 700",
          points: [
            "Anxiety-free, gentle approach for children",
            "Saves primary teeth for healthy adult growth",
            "Protective stainless steel & anterior crowns",
          ],
        },
        {
          name: "Night Guard & Bruxism Care",
          body: "Custom-molded protective night guards to stop teeth grinding, jaw pain, and enamel wear.",
          tags: ["Night Guard", "Bruxism"],
          duration: "10 mins",
          price: "AED 600",
          points: [
            "Protects enamel from nocturnal grinding",
            "Relieves jaw joint (TMJ) tension and headaches",
            "Custom comfortable impression",
          ],
        },
      ]}
      faqs={[
        {
          question: "How often should I visit the dentist for a checkup?",
          answer: "We recommend visiting Al Nemah Dental Clinic every 6 months for a routine examination and hygiene cleaning to detect and prevent issues early.",
        },
        {
          question: "Are dental implants permanent?",
          answer: "Yes. Implants are designed to be permanent. The titanium post fuses with your jawbone through a process called osseointegration, and with proper care, it can last a lifetime.",
        },
        {
          question: "What is Invisalign, and is it better than traditional braces?",
          answer: "Invisalign uses transparent, removable plastic aligners to straighten teeth. It is highly aesthetic, comfortable, and allows you to eat and brush normally. Traditional braces are sometimes better suited for complex orthopedic movements.",
        },
        {
          question: "Does a root canal treatment hurt?",
          answer: "No. With modern anesthesia and advanced instrumentation, a root canal is no more uncomfortable than receiving a standard filling. It actually relieves the severe pain caused by tooth infections.",
        },
        {
          question: "How long is the recovery after a wisdom tooth extraction?",
          answer: "Most patients recover within 3 to 5 days. We provide custom pain management instructions and cold compress guidance to ensure a quick and smooth recovery.",
        },
      ]}
      related={[
        { slug: "/services/dental/aesthetic-dentistry", label: "Aesthetic Dentistry" },
        { slug: "/services/skin", label: "Skin & HydraFacial" },
        { slug: "/services/wellness", label: "Wellness & Longevity" },
      ]}
      heroImage={heroImg}
      dental={true}
      beforeImage={beforeImg}
      afterImage={afterImg}
    />
  ),
});
