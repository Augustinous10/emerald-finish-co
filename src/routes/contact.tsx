import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ubudasa — Kigali, Rwanda" },
      { name: "description", content: "Visit our Kigali office, call, WhatsApp, or send a message. We respond within 2 business hours." },
      { property: "og:title", content: "Contact Ubudasa Wall Paints Ltd" },
      { property: "og:description", content: "Get in touch with Rwanda's premier wall finishing studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
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
      subject: String(fd.get("subject") || "").trim() || null,
      message: String(fd.get("message") || "").trim(),
    };
    const { error } = await supabase.from("contact_messages").insert(payload);
    setBusy(false);
    if (error) { toast.error("Couldn't send. Try again or WhatsApp us."); return; }
    setSubmitted(true);
  }

  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      <section className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold">Contact</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance">
            Let's plan something exceptional.
          </h1>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {[
              { Icon: MapPin, t: "Visit Our Showroom", v: "KK 18 Avenue,\nKigali, Rwanda" },
              { Icon: Phone, t: "Call or WhatsApp", v: "+250 788 679 097,+250 788 789 091" },
              { Icon: Mail, t: "Email", v: "ubudasawallpaints@gmail.com" },
              { Icon: Clock, t: "Business Hours", v: "Mon – Sat · 8:00 – 20:00" },
            ].map(({ Icon, t, v }) => (
              <div key={t} className="flex gap-5">
                <div className="size-12 grid place-items-center bg-brand text-canvas rounded-sm shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-xl">{t}</h3>
                  <p className="text-ink/70 mt-1 whitespace-pre-line">{v}</p>
                </div>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="bg-secondary p-12 text-center space-y-4">
              <CheckCircle2 className="mx-auto text-brand" size={48} strokeWidth={1.5} />
              <h2 className="font-display text-3xl">Message received</h2>
              <p className="text-ink/70">Our team will respond within 2 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-10 space-y-5">
              <h2 className="font-display text-2xl mb-2">Send a message</h2>
              {[
                { label: "Full name", name: "name", type: "text", required: true },
                { label: "Email", name: "email", type: "email", required: true },
                { label: "Phone", name: "phone", type: "tel", required: false },
                { label: "Subject", name: "subject", type: "text", required: false },
              ].map((f) => (
                <div key={f.name} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">{f.label}</label>
                  <input name={f.name} type={f.type} required={f.required} className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </div>
              ))}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">Message</label>
                <textarea name="message" rows={5} required className="w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand" />
              </div>
              <button type="submit" disabled={busy} className="w-full bg-brand text-brand-foreground py-4 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50">
                {busy ? "Sending…" : "Send Message"}
              </button>
              <p className="text-[11px] text-ink/50">We typically respond within 2 business hours.</p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}