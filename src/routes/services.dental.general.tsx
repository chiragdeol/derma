import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/about.jpg";

export const Route = createFileRoute("/services/dental/general")({
  head: () => ({
    meta: [
      { title: "Dentist in Dubai | Check-ups, Cleaning, Fillings — Al Nemah" },
      { name: "description", content: "Family dentist in Dubai for check-ups, hygiene cleaning, fillings, root canal and children's dentistry — a gentle, pain-free approach. Book your visit." },
      { property: "og:title", content: "General & Preventive Dentistry at Al Nemah" },
      { property: "og:description", content: "Everyday dental care done gently — check-ups, cleaning, fillings and root canal." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      division="Dental"
      divisionUrl="/services"
      categoryName="General & Preventive"
      eyebrow="Dental · General"
      metaTitle="Dentist in Dubai | Check-ups, Cleaning, Fillings — Al Nemah"
      metaDesc="Family dentist in Dubai for check-ups, hygiene cleaning, fillings, root canal and children's dentistry — a gentle, pain-free approach. Book your visit."
      h1="General & Preventive Dentistry in Dubai"
      intro="Everyday dental care done gently — check-ups, cleaning, fillings and root canal for the whole family."
      highlights={[
        ["Every 6 months", "Recall"],
        ["All ages", "Family care"],
        ["Pain-free", "Approach"],
      ]}
      concerns={["Toothache", "Cavities", "Bleeding gums", "Sensitivity", "Children's teeth"]}
      txIntro="The everyday care that keeps your smile healthy."
      treatments={[
        {
          name: "Check-up & X-ray",
          body: "A thorough exam of teeth and gums to catch issues early.",
          tags: ["Prevention", "Exam"],
          duration: "30 min",
          price: "From AED 250",
        },
        {
          name: "Scaling & Polishing",
          body: "Professional hygiene cleaning for healthy gums.",
          tags: ["Hygiene", "Gums"],
          duration: "30–45 min",
          price: "From AED 300",
        },
        {
          name: "Tooth-Coloured Fillings",
          body: "Natural-looking composite fillings that blend in.",
          tags: ["Cavities", "Natural"],
          duration: "30–45 min",
          price: "From AED 350",
        },
        {
          name: "Root Canal",
          body: "Saves an infected tooth, done comfortably.",
          tags: ["Infection", "Save tooth"],
          duration: "1–2 visits",
          price: "From AED 1,200",
        },
        {
          name: "Pediatric Dentistry",
          body: "Gentle, friendly dental care for children.",
          tags: ["Children", "Gentle"],
          duration: "30 min",
          price: "From AED 250",
        },
      ]}
      faqs={[
        {
          question: "How often should I visit?",
          answer: "A check-up and clean every six months suits most people.",
        },
        {
          question: "Do you treat nervous patients?",
          answer: "Yes — a calm, gentle approach with every step explained.",
        },
        {
          question: "Are fillings tooth-coloured?",
          answer: "Yes, we use natural-looking composite fillings.",
        },
      ]}
      related={[
        { slug: "/services/dental/whitening", label: "Teeth Whitening" },
        { slug: "/services/dental/implants", label: "Dental Implants" },
        { slug: "/services/dental/orthodontics", label: "Orthodontics" },
      ]}
      heroImage={heroImg}
      dental={true}
    />
  ),
});
