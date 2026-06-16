import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: "Request a Free Quote — Ubudasa Wall Paints" },
      { name: "description", content: "Tell us about your project and get an instant response from a senior consultant within 48 hours." },
      { property: "og:title", content: "Request a Free Quote — Ubudasa" },
      { property: "og:description", content: "Free site visit. Premium materials. Master craftsmen." },
      { property: "og:url", content: "/request-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: Quote,
});

const SERVICES = [
  "Interior Painting",
  "Exterior Painting",
  "Decorative Finishes",
  "TV Wall Design",
  "Gypsum Ceilings",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Interior Decoration",
  "Commercial Painting",
  "Home Renovation",
];

const BUDGETS = [
  "Under 500,000 RWF",
  "500,000 – 2,000,000 RWF",
  "2,000,000 – 5,000,000 RWF",
  "5,000,000 – 15,000,000 RWF",
  "15,000,000+ RWF",
];

function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      service: String(fd.get("service") || "") || null,
      budget: String(fd.get("budget") || "") || null,
      message: String(fd.get("message") || "") || null,
      project_type: String(fd.get("location") || "") || null,
    };
    const { error } = await supabase.from("quote_requests").insert(payload);
    setBusy(false);
    if (error) {
      toast.error("Couldn't submit. Please try again or call us directly.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      <section className="pt-36 pb-12 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold">Free Quote</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4 font-medium text-balance">
            Tell us about your project.
          </h1>
          <p className="mt-5 text-ink/65 max-w-xl mx-auto text-pretty">
            A senior consultant will respond within 48 hours and arrange a free site visit at your convenience.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-secondary p-12 text-center space-y-4">
              <CheckCircle2 className="mx-auto text-brand" size={48} strokeWidth={1.5} />
              <h2 className="font-display text-3xl">Thank you</h2>
              <p className="text-ink/70 max-w-md mx-auto">
                Your request is in. A senior consultant will be in touch within 48 hours to confirm your site visit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-8 md:p-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name *" name="name" required />
                <Field label="Phone (MTN / Airtel) *" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email *" name="email" type="email" required />
                <Field label="Location / District" name="location" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">
                  Service required *
                </label>
                <select name="service" required className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand">
                  <option value="">Choose a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">
                  Estimated budget
                </label>
                <select name="budget" className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand">
                  <option value="">Select a range…</option>
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">
                  Project description
                </label>
                <textarea name="message" rows={5} className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand" placeholder="Rooms, dimensions, finish preferences, timeline…" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Preferred start date" name="date" type="date" />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">Photos (optional)</label>
                  <input type="file" multiple accept="image/*" className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-brand file:text-canvas file:text-xs file:uppercase file:tracking-widest file:font-semibold" />
                </div>
              </div>

              <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50">
                {busy ? "Sending…" : "Send Request"}
              </button>
              <p className="text-[11px] text-ink/50 text-center">
                By submitting, you agree to be contacted about your project. We respect your privacy.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
      />
    </div>
  );
}