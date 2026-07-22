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
              Ubudasa wall paints Ltd is a private company limited by Shares, incorporated on 3July, 2021
               company code N°119638573, whose head office is located in City of Kigali, Kicukiro District, 
               Kanombe Sector, Kabeza Cell, KK18st.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em]">Visit</h5>
            <div className="space-y-2 text-sm text-ink/70">
              <p>KK 18 Avenue, Kigali</p>
              <p>Kigali, Rwanda</p>
              <p>Mon – Sat · 8am – 6pm</p>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em]">Contact</h5>
            <div className="space-y-2 text-sm text-ink/70">
              <a href="tel:+250788679097" className="block hover:text-brand">+250 788 679 097</a>
               <a href="tel:+250788789091" className="block hover:text-brand">+250 788 789 091</a>
              <a href="mailto:ubudasawallpaints@gmail.com" className="block hover:text-brand">ubudasawallpaints@gmail.com</a>
              <Link to="/request-quote" className="block hover:text-brand">Request a Quote →</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Ubudasa Wall Paints Ltd. All rights reserved.
          </p>
          <p className="text-[10px] text-ink/50 uppercase tracking-[0.2em]">
            CREATED BY <a href="https://www.ikirezi.co.rw" target="_blank" rel="noopener noreferrer" className="hover:text-brand">ICYATSI TECHNOLOGY Limited</a>
          </p>
        </div>
      </div>
    </footer>
  );
}