import { useState } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Cosmetic Injectables",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Al Nemah Clinic, I'd like to enquire.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/971500999324?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-2 lg:px-10 lg:py-36">
        <div>
          <p className="eyebrow mb-5">Book a consultation</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Tell us about your <em className="italic">goals</em>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Share a few details and our patient coordinator will reach out within one
            business day to arrange your private consultation.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p className="text-foreground">📍 New Muweilah, Sharjah, UAE</p>
            <p className="text-foreground">📞 +971 50 099 9324</p>
            <p className="text-foreground flex flex-col gap-1 mt-1">
              <span>✉ contact@alnemahmc.com</span>
              <span>✉ md@alnemahmc.com</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border/70 bg-card p-8 shadow-soft sm:p-10"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-sm text-foreground">Full name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent"
                placeholder="Your name"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-foreground">Phone</span>
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent"
                  placeholder="+971 ..."
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-foreground">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-foreground">Interested in</span>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent"
              >
                <option>Cosmetic Injectables</option>
                <option>Skin & HydraFacial</option>
                <option>Laser & Hair Removal</option>
                <option>Anti-Aging & Lifting</option>
                <option>Dental Care & Smile Design</option>
                <option>Wellness & Longevity</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-foreground">Message</span>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none focus:border-accent"
                placeholder="A little about what you're looking for..."
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Send enquiry via WhatsApp
            </button>
            {sent && (
              <p className="text-sm text-accent-foreground">
                Thank you — opening WhatsApp to confirm your message.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
