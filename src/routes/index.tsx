import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, Brush, Heart, MapPin, Sparkles, Users } from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BeforeAfter } from "@/components/site/BeforeAfter";
// import { CostCalculator } from "@/components/site/CostCalculator";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { StatCounter } from "@/components/site/StatCounter";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";

import hero from "@/assets/hero.jpg";
import sInterior from "@/assets/services_Interior_design.jpeg";
import sGypsum from "@/assets/services_Ceiling.jpeg";
import sKitchen from "@/assets/services_Kitchen.jpeg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ubudasa Wall Paints — Premium Wall Finishing in Kigali, Rwanda" },
      {
        name: "description",
        content:
          "Rwanda's leading wall painting, gypsum design, and interior finishing studio. 500+ projects, premium craftsmanship, instant quote calculator.",
      },
      { property: "og:title", content: "Ubudasa Wall Paints — Transforming Spaces Across Rwanda" },
      {
        property: "og:description",
        content:
          "Premium interior & exterior painting, decorative finishes, gypsum ceilings and full renovations in Kigali.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

const slides = [
  {
    eyebrow: "Premium Wall Finishing",
    title: "Transform Your Space Into A Masterpiece",
    body: "Architectural painting and interior finishing tailored for Kigali's finest spaces.",
    img: hero,
  },
  {
    eyebrow: "Interior Craft",
    title: "Every Room, Flawlessly Finished",
    body: "Premium application using luxury European techniques for a lasting finish.",
    img: sInterior,
  },
  {
    eyebrow: "Decorative Ceilings",
    title: "Architectural Depth, Overhead",
    body: "Bespoke gypsum ceilings and wall features designed for your space.",
    img: sGypsum,
  },
  {
    eyebrow: "Kitchen Renovation",
    title: "Culinary Spaces, Reimagined",
    body: "Full makeovers integrating modern functionality and premium finishes.",
    img: sKitchen,
  },
  {
    eyebrow: "Decorative Finishes",
    title: "Texture That Turns Heads",
    body: "Marble-effect and artistic finishes applied by master craftsmen.",
    img: p3,
  },
  {
    eyebrow: "The Transformation",
    title: "See The Ubudasa Difference",
    body: "Real before-and-after results from projects across Rwanda.",
    img: after,
  },
];

const services = [
  { title: "Interior Painting", desc: "Premium application using luxury European techniques for a flawless finish.", img: sInterior },
  { title: "Gypsum & Ceilings", desc: "Bespoke ceiling installations and decorative wall features for architectural depth.", img: sGypsum },
  { title: "Kitchen Renovation", desc: "Full culinary space makeovers integrating modern functionality and aesthetics.", img: sKitchen },
  { title: "Exterior Painting", desc: "Weather-resistant coatings engineered for Rwandan rainy seasons.", img: sInterior },
  { title: "TV Wall Design", desc: "Custom built-in media walls with integrated LED architectural lighting.", img: sGypsum },
  { title: "Bathroom Renovation", desc: "Waterproofing, tiling and fittings — a complete bathroom transformation.", img: sKitchen },
];

const products = [
  { name: "Interior Matte Silk", sub: "200+ Custom Colors · 4L", price: 18000, img: p1 },
  { name: "Smooth Base Putty", sub: "Professional Grade · 5kg", price: 9000, img: p2 },
  { name: "Marble Effect Finish", sub: "Artistic Texture · 5kg", price: 28000, img: p3 },
  { name: "Exterior Guard Plus", sub: "Weather Resistant · 4L", price: 22000, img: p4 },
];

const whys = [
  { icon: Sparkles, t: "No Fixed Formula", d: "We don't repeat the same design twice — every wall is a fresh exploration, kept unique and new for each client." },
  { icon: Brush, t: "3D Decorative Finishes", d: "Interior and exterior wall paints applied in distinctive 3D dimensions, built to give any space depth and character." },
  { icon: Heart, t: "Born From Passion", d: "Founded in 2021 by Delphine Umugwizawase, who turned a personal love of painting into a company built on craft." },
  { icon: Users, t: "A Women-Led Team", d: "Six permanent professionals and a wider crew of part-timers — 70% of them women — trained and proud of every finish." },
  { icon: MapPin, t: "Rooted in Kigali", d: "Based in Kanombe, Kicukiro — close to the homes and businesses we serve across Rwanda." },
  { icon: Award, t: "A Growing Community", d: "A trusted name in Kigali's finishing scene, with a loyal following of clients who return for every new project." },
];

const faqs = [
  { q: "How much does professional painting cost in Rwanda?", a: "Costs vary by area, finish, and complexity. Use our calculator above for an instant estimate or request a free site visit for an exact quote." },
  { q: "How long does a typical painting project take?", a: "A standard 3-bedroom home takes 4–7 working days. Complex decorative or renovation projects can take 2–4 weeks." },
  { q: "Do you supply materials or do I provide them?", a: "Both options are available. Most clients prefer our turnkey package — we supply premium materials at trade pricing and warrant the result." },
  { q: "Do you offer a warranty?", a: "Yes. All workmanship is guaranteed for 12 months. Premium-tier finishes carry an extended 24-month warranty." },
  { q: "Which districts do you serve?", a: "We serve all 15+ districts across Rwanda, with active project teams in Kigali, Musanze, Rubavu and Huye." },
  { q: "Can I get a free site visit?", a: "Absolutely. Request one through the form below — a senior consultant will visit within 48 hours." },
];

const testimonials = [
  { name: "Aline U.", loc: "Kicukiro, Kigali", text: "Ubudasa transformed our living room into something straight out of a design magazine. The attention to detail was unmatched." },
  { name: "Eric M.", loc: "Hotel Manager, Nyarugenge", text: "We've worked with three painting companies in Kigali. Ubudasa is in a league of its own — professional, clean, on time." },
  { name: "Sandrine K.", loc: "Property Developer, Gasabo", text: "Their finish quality holds up beautifully across all 14 apartments. We won't use anyone else for our future projects." },
];

function fmtRWF(n: number) {
  return new Intl.NumberFormat("en-RW").format(n);
}

function Home() {
  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      {/* Hero — auto-rotating slideshow, 6 project images */}
      <HeroSlideshow slides={slides} />

      {/* Stats */}
      <section className="py-14 bg-ink text-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-canvas/10">
            {[
              { v: 500, s: "+", l: "Projects Completed" },
              { v: 1200, s: "+", l: "Happy Clients" },
              { v: 45, s: "+", l: "Certified Experts" },
              { v: 98, s: "%", l: "Satisfaction Rate" },
            ].map((it) => (
              <div key={it.l} className="text-center md:text-left md:pl-8">
                <span className="block font-display text-4xl md:text-5xl mb-1 text-gold">
                  <StatCounter value={it.v} suffix={it.s} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-canvas/60">{it.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-28 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={sInterior}
                alt="Ubudasa Wall Paints craftsmen at work in Kigali"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand text-canvas p-6 hidden md:block">
              <div className="font-display text-4xl text-gold">10+</div>
              <div className="text-[10px] uppercase tracking-[0.25em] mt-1">Years of Craft</div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Company Profile
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-balance leading-[1.1]">
              Rwanda's trusted name in premium wall finishing.
            </h2>
            <p className="text-ink/70 text-lg leading-relaxed text-pretty">
              Ubudasa Wall Paints Ltd is a Kigali-based architectural finishing studio
              specialising in interior and exterior painting, decorative plasters, gypsum
              ceilings, TV wall design, and full renovation work. From private villas to
              hotels, offices and developer projects, we deliver finishes that elevate every
              surface and endure every season.
            </p>
            <p className="text-ink/70 leading-relaxed text-pretty">
              Founded on a commitment to craftsmanship and accountability, our certified
              teams have completed 500+ projects across 15+ districts — using only
              premium-grade materials and luxury European application techniques.
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-black/10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-ink/55">Mission</dt>
                <dd className="mt-2 text-sm text-ink/80">
                  Our mission is to help you transform your houses through art and skills from paints. 
                  While delivering the very best in quality and customer service.
                   With every project, we thoroughly prepare and clean all surfaces prior to painting
                </dd>
                <dd className="mt-2 text-sm text-ink/80">
                  As expert and professional, we work quickly, efficiently, and carefully to complete the job in a timely manner. 
                  Throughout the process, we remain in consistent communication with you to ensure that your expectations are not only met but exceeded. 
                  We do all by preserving and protecting our ecosystem.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-ink/55">Vision</dt>
                <dd className="mt-2 text-sm text-ink/80">
                 Preservation of Rwandan wall painting style from ancients and adopt it to the modern wall painting.
                </dd>
                  <dd className="mt-2 text-sm text-ink/80">
To help you create the home, business, or commercial space of your dreams by providing the very highest quality products and working directly with you to capture your vision, we strive for nothing less than 100% customer satisfaction.</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-ink/55">Headquarters</dt>
                <dd className="mt-2 text-sm text-ink/80">Kigali, Rwanda</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-ink/55">Coverage</dt>
                <dd className="mt-2 text-sm text-ink/80">15+ districts nationwide</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand text-canvas px-7 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-ink transition-colors"
              >
                Full Company Profile <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-ink/20 px-7 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-secondary transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

{/* Why choose us */}
<section className="py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-2xl mb-16 flex items-end justify-between gap-8">
      <div>
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Why Ubudasa</span>
        <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium text-balance">
          The standard for finishing in Rwanda.
        </h2>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {whys.map(({ icon: Icon, t, d }) => (
        <div
          key={t}
          className="group relative bg-canvas border border-black/10 hover:border-gold/50 transition-colors duration-300"
        >
          {/* punch-hole tag, swatch-style */}
          <div className="absolute top-5 right-5 w-3 h-3 rounded-full border border-black/15 group-hover:border-gold transition-colors" />

          <div className="p-8 pt-9">
            <Icon className="text-brand" size={26} strokeWidth={1.5} />

            <h3 className="font-display text-xl font-medium mt-6">{t}</h3>

            {/* swatch label rule */}
            <div className="w-8 h-px bg-gold my-4" />

            <p className="text-ink/60 text-sm leading-relaxed text-pretty">{d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Services */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Expertise</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium text-balance">
                Architectural finishing tailored to your space.
              </h2>
            </div>
            <Link to="/services" className="text-sm uppercase tracking-widest border-b border-ink pb-1 self-start md:self-auto">
              All Services
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link to="/services" key={s.title} className="group bg-canvas overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
                <div className="p-7 space-y-3">
                  <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                  <p className="text-ink/65 text-sm text-pretty">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-brand text-xs font-semibold uppercase tracking-widest border-b border-brand/20 pb-1">
                    Learn More <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">The Transformation</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium text-balance">
              Drag to reveal the Ubudasa difference.
            </h2>
          </div>
          <BeforeAfter beforeSrc={before} afterSrc={after} />
        </div>
      </section>

      {/* Products */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Showroom</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium">Premium Finishes</h2>
            </div>
            <a href="#" className="text-sm uppercase tracking-widest border-b border-ink pb-1">Shop Collection</a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((p) => (
              <div key={p.name} className="group">
                <div className="aspect-[4/5] bg-canvas overflow-hidden mb-5">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="text-sm font-medium">{p.name}</h4>
                    <p className="text-xs text-ink/55 mt-0.5">{p.sub}</p>
                  </div>
                  <span className="text-sm font-medium text-brand whitespace-nowrap">{fmtRWF(p.price)} RWF</span>
                </div>
                <button className="mt-4 w-full py-2.5 bg-ink text-canvas text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-28 bg-brand"> */}
        {/* <div className="max-w-7xl mx-auto px-6"> */}
          {/* <CostCalculator /> */}
        {/* </div> */}
      {/* </section> */}

      {/* Testimonials */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Client Voices</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium text-balance">
              Trusted by 1000+ clients across Rwanda and east Africa.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="bg-secondary p-8 space-y-5 border border-ink/5 transition-colors hover:border-gold/30"
              >
                <div className="flex gap-1 text-gold text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-ink/80 text-[15px] leading-relaxed text-pretty">
                  <span className="text-gold">"</span>
                  {t.text}
                  <span className="text-gold">"</span>
                </blockquote>
                <figcaption className="pt-1 border-t border-ink/10">
                  <div className="text-sm font-semibold pt-4">{t.name}</div>
                  <div className="text-xs text-ink/55 mt-0.5">{t.loc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ
      <section className="py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 font-medium">Questions, answered.</h2>
          </div>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none gap-6">
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className="text-brand text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-ink/70 mt-4 text-pretty leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-28 bg-brand text-canvas">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display text-4xl md:text-6xl font-medium text-balance">
            Ready to transform your home or business?
          </h2>
          <p className="text-canvas/75 text-lg max-w-xl mx-auto text-pretty">
            Join 1,200+ satisfied clients across Rwanda who chose Ubudasa for spaces that endure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/request-quote" className="bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-canvas transition-colors">
              Get a Free Quote
            </Link>
            <Link to="/contact" className="border border-canvas/30 text-canvas px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-canvas/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}