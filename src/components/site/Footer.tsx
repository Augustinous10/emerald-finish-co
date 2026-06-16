import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-secondary border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 md:col-span-2 max-w-sm">
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl text-brand">UBUDASA</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold mt-1">
                Wall Paints Ltd
              </span>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed text-pretty">
              Leading Rwanda's wall finishing industry with luxury precision and
              architectural excellence since 2017. Transforming spaces across Kigali
              and beyond.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em]">Visit</h5>
            <div className="space-y-2 text-sm text-ink/70">
              <p>KN 25 Rd, Kicukiro</p>
              <p>Kigali, Rwanda</p>
              <p>Mon – Sat · 8am – 6pm</p>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em]">Contact</h5>
            <div className="space-y-2 text-sm text-ink/70">
              <a href="tel:+250788000000" className="block hover:text-brand">+250 788 000 000</a>
              <a href="mailto:info@ubudasa.rw" className="block hover:text-brand">info@ubudasa.rw</a>
              <Link to="/request-quote" className="block hover:text-brand">Request a Quote →</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ubudasa Wall Paints Ltd. All rights reserved.
          </p>
          <p className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">
            Crafted in Kigali · Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}