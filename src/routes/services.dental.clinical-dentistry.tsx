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
        {
          name: "Braces Removal",
          body: "Removal of orthodontic brackets and adhesive, followed by polishing so the enamel feels smooth.",
          tags: ["Orthodontics", "Debonding"],
          duration: "45 mins",
          price: "AED 500",
        },
        {
          name: "Aligners (Invisaligners)",
          body: "Clear aligner treatment to straighten teeth with removable trays, including Invisaligner options.",
          tags: ["Aligners", "Invisaligners"],
          duration: "Consultation",
          price: "AED 1,999",
        },
        {
          name: "Temporary Filling",
          body: "Short-term filling to seal a tooth and ease sensitivity until a permanent restoration is placed.",
          tags: ["Temporary", "Relief"],
          duration: "10 mins",
          price: "AED 150",
        },
        {
          name: "Direct Pulp Capping",
          body: "Protective dressing placed directly over an exposed pulp to help the tooth heal and stay vital.",
          tags: ["Pulp Care", "Conservative"],
          duration: "15 mins",
          price: "AED 300",
        },
        {
          name: "Indirect Pulp Capping",
          body: "Protective lining placed over deep decay, close to the pulp, before the final filling.",
          tags: ["Pulp Care", "Deep Decay"],
          duration: "15 mins",
          price: "AED 300",
        },
        {
          name: "Re-RCT",
          body: "Retreatment of a previous root canal when infection or symptoms return.",
          tags: ["Endodontics", "Retreatment"],
          duration: "2 hours",
          price: "AED 1,000",
        },
        {
          name: "Post and Core",
          body: "A post and core build-up that rebuilds a root-treated tooth so a crown can be fitted.",
          tags: ["Core Build-up", "Crown Prep"],
          duration: "2 hours",
          price: "AED 1,000",
        },
        {
          name: "Inlay",
          body: "A custom inlay that restores a damaged chewing surface while keeping healthy tooth structure.",
          tags: ["Inlay", "Restorative"],
          duration: "20 mins",
          price: "AED 800",
        },
        {
          name: "Onlay",
          body: "A custom onlay that covers a larger portion of the tooth when a filling is no longer enough.",
          tags: ["Onlay", "Restorative"],
          duration: "20 mins",
          price: "AED 800",
        },
        {
          name: "Veneer Removal (per jaw)",
          body: "Careful removal of existing veneers from one jaw, with the tooth surface smoothed afterward.",
          tags: ["Veneers", "Removal"],
          duration: "30 mins",
          price: "AED 1,000",
        },
        {
          name: "Space Maintainer",
          body: "A small appliance that holds space after a baby tooth is lost early, so adult teeth can erupt in line.",
          tags: ["Pediatric", "Space"],
          duration: "15 mins",
          price: "AED 600",
        },
        {
          name: "Dry Socket Management",
          body: "Cleaning and dressing of a dry socket to relieve pain after an extraction.",
          tags: ["Aftercare", "Pain Relief"],
          duration: "10 mins",
          price: "AED 150",
        },
        {
          name: "Brackets Injury Treatment",
          body: "Repair of a loose, broken, or irritating orthodontic bracket.",
          tags: ["Braces", "Emergency"],
          duration: "15 mins",
          price: "AED 150",
        },
        {
          name: "Suture Removal",
          body: "Removal of dental sutures once the surgical site has healed.",
          tags: ["Aftercare", "Surgical"],
          duration: "3 mins",
          price: "AED 150",
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
