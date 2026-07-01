import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import heroImg from "@/assets/service-laser.jpg";

export const Route = createFileRoute("/services/laser")({
  head: () => ({
    meta: [
      { title: "Laser & Hair Removal — Lumière Clinic Dubai" },
      { name: "description", content: "Advanced laser platforms for hair removal, pigmentation, vascular lesions and tattoo removal — safe for all skin types." },
      { property: "og:title", content: "Laser at Lumière" },
      { property: "og:description", content: "Diode, Nd:YAG and Pico lasers performed by trained physicians." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: () => (
    <ServiceTemplate
      heroImage={heroImg}
      eyebrow="Service · Laser"
      titleLead="Laser &"
      titleItalic="Hair Removal."
      heroSubtitle="Medical-grade laser platforms — calibrated for every Fitzpatrick skin type, performed by dermatology-trained practitioners."
      promiseTitleLead="Right device, right"
      promiseTitleItalic="settings."
      promiseBody="We invest in multi-wavelength platforms so the laser fits the skin — not the other way around. That is what makes treatment effective on darker, Middle-Eastern and South-Asian skin without burns or hypopigmentation."
      treatmentsTitle="Laser treatments"
      treatments={[
        { name: "Diode hair removal", body: "Fast, comfortable full-body sessions — safe for all skin types.", time: "30 – 90 min" },
        { name: "Pigmentation & melasma", body: "Pico-toning for sun damage, freckles and stubborn pigmentation.", time: "30 min" },
        { name: "Vascular lasers", body: "Targets redness, broken capillaries and rosacea.", time: "30 min" },
        { name: "Tattoo removal", body: "Pico-laser for high clearance with fewer sessions.", time: "20 – 45 min" },
        { name: "Fractional resurfacing", body: "CO₂ and erbium for scars, pores and overall texture.", time: "60 min" },
        { name: "Laser carbon peel", body: "Instant glow, refined pores and minor pigmentation.", time: "30 min" },
      ]}
      journey={[
        { step: "Patch test", body: "Always, before the first treatment." },
        { step: "Plan", body: "Realistic session count and seasonal scheduling." },
        { step: "Session", body: "Cooling, comfort and licensed-physician oversight." },
        { step: "Aftercare", body: "SPF, recovery balms and clear lifestyle guidance." },
      ]}
    />
  ),
});
