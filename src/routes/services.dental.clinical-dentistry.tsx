import { Route as parentRoute } from "./../services";
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
      txIntro="Our clinical dentistry menu covers preventative, restorative, and surgical care."
      treatments={[
        {
          name: "General & Preventive Care",
          body: "Comprehensive checkups, detailed scaling, polishing, dental sealants, and digital X-rays to prevent issues and maintain pristine oral hygiene.",
          tags: ["Preventative", "Hygiene"],
          duration: "45–60 min · Zero downtime",
          price: "From AED 350",
          points: [
            "Includes full digital oral cancer screening",
            "Painless scaling and soft polishing",
            "Removes plaque, calculus, and surface stains",
            "Recommended every 6 months for adults",
          ],
        },
        {
          name: "Dental Implants",
          body: "Permanent, bio-compatible titanium posts placed into the jawbone to serve as stable roots for custom, natural-looking porcelain crowns.",
          tags: ["Restoration", "Surgical"],
          duration: "2–3 visits · 1–2 days downtime",
          price: "From AED 4,500",
          points: [
            "Permanent solution for single or multiple missing teeth",
            "Restores full chewing power and facial structure",
            "Premium titanium posts fuse naturally with the bone",
            "Completed with highly durable porcelain crowns",
          ],
        },
        {
          name: "Orthodontics & Invisalign",
          body: "Modern clear aligners (Invisalign) and traditional braces customized to align crooked teeth, close gaps, and correct bite issues.",
          tags: ["Alignment", "Clear Aligners"],
          duration: "Custom plan · Ongoing",
          price: "From AED 8,000",
          points: [
            "Invisalign clear aligners for nearly invisible treatment",
            "Traditional metal and ceramic braces options",
            "Improves both aesthetics and bite alignment",
            "Suitable for teenagers and adults",
          ],
        },
        {
          name: "Root Canal Therapy",
          body: "Painless micro-surgical procedure to remove infected tissue from inside the tooth, disinfection, and sealing to save the natural tooth.",
          tags: ["Restoration", "Pain Relief"],
          duration: "1–2 visits · Zero downtime",
          price: "From AED 1,200",
          points: [
            "Relieves severe tooth pain caused by infection",
            "Saves the natural tooth and avoids extraction",
            "Performed under local anesthesia for complete comfort",
            "Reinforced with a protective custom crown",
          ],
        },
        {
          name: "Wisdom Teeth Extraction",
          body: "Safe, surgical or simple removal of impacted, painful, or crowded wisdom teeth, performed under highly sterile, comfortable conditions.",
          tags: ["Surgical", "Pain Relief"],
          duration: "30–60 min · 2–3 days recovery",
          price: "From AED 800",
          points: [
            "Prevents crowding and future molar damage",
            "Uses minimally invasive extraction techniques",
            "Full pain management and detailed aftercare planning",
            "Local anesthesia or conscious sedation options",
          ],
        },
        {
          name: "Pediatric Dentistry",
          body: "Gentle, friendly dental checkups, cavity preventions (fluoride/sealants), and restorations tailored specifically to make children feel safe.",
          tags: ["Kids Care", "Preventative"],
          duration: "30 min · Zero downtime",
          price: "From AED 250",
          points: [
            "Fun, anxiety-free approach for children",
            "Fluoride varnishes to strengthen developing enamel",
            "Teaches children healthy brushing habits",
            "Comfortable, child-friendly treatment rooms",
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
