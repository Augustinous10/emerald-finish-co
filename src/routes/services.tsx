import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import sInterior from "@/assets/service-interior.jpg";
import sGypsum from "@/assets/service-gypsum.jpg";
import sKitchen from "@/assets/service-kitchen.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Painting, Gypsum, Renovation in Rwanda | Ubudasa" },
      { name: "description", content: "Ten dedicated finishing services: interior & exterior painting, gypsum ceilings, TV walls, kitchen and bathroom renovation, and more — across Rwanda." },
      { property: "og:title", content: "Ubudasa Services — Wall Finishing & Renovation" },
      { property: "og:description", content: "Premium wall painting, decorative finishes, gypsum design, and full home renovation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const list = [
  { t: "Interior Painting", d: "Full interior wall painting with premium paint brands and master-grade application.", img: sInterior },
  { t: "Exterior Painting", d: "Weather-resistant exterior coatings engineered for Rwandan rainy seasons.", img: sInterior },
  { t: "Decorative Finishes", d: "Textured, stencil, marble, and metallic artistic wall finishes.", img: sInterior },
  { t: "TV Wall Design", d: "Custom built-in TV wall units with integrated LED architectural lighting.", img: sGypsum },
  { t: "Gypsum Ceilings", d: "False ceilings, coffered designs, and LED panel installations.", img: sGypsum },
  { t: "Modern Kitchen Design", d: "Full kitchen renovation and finishing with premium cabinetry.", img: sKitchen },
  { t: "Bathroom Renovation", d: "Tile, waterproofing, fittings, and complete bathroom transformations.", img: sKitchen },
  { t: "Interior Decoration", d: "Furniture arrangement, soft furnishings, and full décor styling.", img: sKitchen },
  { t: "Commercial Painting", d: "Offices, hotels, warehouses, and large-scale commercial projects.", img: sInterior },
  { t: "Home Renovation", d: "Complete home makeovers — floor to ceiling, on schedule and on budget.", img: sGypsum },
];

function Services() {
  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      <section className="pt-36 pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold">Services</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance">
            Ten services. One uncompromising standard.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s) => (
            <article key={s.t} className="bg-secondary overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700" />
              </div>
              <div className="p-7 space-y-3">
                <h2 className="font-display text-2xl">{s.t}</h2>
                <p className="text-ink/65 text-sm text-pretty leading-relaxed">{s.d}</p>
                <Link to="/request-quote" className="inline-block text-brand text-xs font-semibold uppercase tracking-widest border-b border-brand/20 pb-1">
                  Request Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}