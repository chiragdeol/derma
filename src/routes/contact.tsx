import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al Nemah Clinic Dubai" },
      { name: "description", content: "Book a consultation or visit Al Nemah Clinic in Sharjah. Get in touch by WhatsApp, phone or our private inquiry form." },
      { property: "og:title", content: "Contact Al Nemah Clinic" },
      { property: "og:description", content: "Book a consultation or visit our Sharjah clinic." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-12 lg:px-10">
        <p className="eyebrow mb-8">Get in touch</p>
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          Begin a private<br /><em className="italic">conversation.</em>
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Tell us a little about what you're considering. One of our advisors
          will reach out within one working day to arrange a consultation.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <aside className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow mb-3">Visit</p>
            <p className="font-display text-2xl leading-relaxed">
              Behind Zahia City Center<br />
              Al Kawthar Building, Sharjah
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Hours</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Monday — Saturday · 10:00 – 22:00<br />
              Sunday · by appointment
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Direct</p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+971500999324" className="hover:text-foreground text-muted-foreground">+971 50 099 9324</a></li>
              <li><a href="mailto:hello@alnemah.ae" className="hover:text-foreground text-muted-foreground">hello@alnemah.ae</a></li>
              <li><a href="https://wa.me/971500999324" target="_blank" rel="noreferrer" className="hover:text-foreground text-muted-foreground">WhatsApp →</a></li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-2xl border border-border bg-secondary/40 p-12 text-center">
              <p className="eyebrow mb-4">Thank you</p>
              <h2 className="font-display text-3xl">Your message is on its way.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                We'll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-8 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="first" />
                <Field label="Last name" name="last" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div className="mt-6">
                <label className="eyebrow mb-3 block">Service of interest</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none">
                  <option>Aesthetic Medicine</option>
                  <option>Wellness & Recovery</option>
                  <option>Plastic Surgery Consultation</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="eyebrow mb-3 block">Your message</label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                  placeholder="Tell us what you'd like to achieve…"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Send inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-3 block">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
