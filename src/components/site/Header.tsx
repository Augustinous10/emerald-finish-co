import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/85 backdrop-blur-md border-b border-black/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className={`font-display text-2xl tracking-tight ${
              scrolled ? "text-brand" : "text-canvas"
            }`}
          >
            UBUDASA
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.3em] mt-0.5 ${
              scrolled ? "text-gold" : "text-gold"
            }`}
          >
            Wall Paints Ltd
          </span>
        </Link>

        <div className={`hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium ${
          scrolled ? "text-ink" : "text-canvas"
        }`}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/request-quote"
            className="hidden md:inline-flex bg-brand text-brand-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-ink transition-colors"
          >
            Request Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 ${scrolled ? "text-ink" : "text-canvas"}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-canvas border-t border-black/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-widest text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/request-quote"
            onClick={() => setOpen(false)}
            className="block bg-brand text-brand-foreground text-center py-3 rounded-full text-xs uppercase tracking-widest font-semibold"
          >
            Request Quote
          </Link>
        </div>
      )}
    </nav>
  );
}