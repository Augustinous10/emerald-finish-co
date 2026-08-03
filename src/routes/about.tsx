import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import hero from "@/assets/services_Ceiling.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ubudasa — Rwanda's Premium Wall Finishing Studio" },
      { name: "description", content: "Our story, mission, and the team behind Rwanda's most trusted wall finishing and interior design company." },
      { property: "og:title", content: "About Ubudasa Wall Paints Ltd" },
      { property: "og:description", content: "Founded in 2021, Ubudasa is a 216-strong team of wall finishing and interior design specialists based in Kigali." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { t: "Excellence", d: "We hold every brushstroke, every join, every edge to a single standard — exceptional." },
  { t: "Integrity", d: "Honest pricing, clear timelines, transparent material sourcing. No surprises." },
  { t: "Innovation", d: "We invest in new techniques and finishes so Rwandan spaces match the world's best." },
  { t: "Customer Care", d: "We don't finish until the client signs off. Satisfaction is the deliverable." },
];

const timeline = [
  { y: "2021", t: "Ubudasa Wall Paints Ltd incorporated", d: "Registered in Kigali as a private company limited by shares, led by co-founders Henriette and Delphine." },
  { y: "Growth", t: "216-strong team", d: "Our team has grown to 216 skilled staff, trained continuously to sharpen their craft." },
  { y: "Recognition", t: "Women's Excellence in Business & Leadership award", d: "Honoured alongside German Cooperation (GIZ) and 1000 Hills Events for excellence in business and leadership." },
  { y: "Today", t: "A full-service finishing studio", d: "Interior and exterior painting, 3D decorative wall tiles, tile application, and modern ceiling design — for homes, hotels, offices, and commercial spaces across Rwanda." },
];

function About() {
  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={hero} alt="Ubudasa team at work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 text-canvas">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance">
            Crafted in Kigali. Built to endure.
          </h1>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Mission</span>
            <p className="font-display text-2xl text-pretty leading-snug">
              Our mission is to help you transform your houses through art and skill using paint, while delivering the very best in quality and customer service. With every project, we thoroughly prepare and clean all surfaces prior to painting.
            </p>
            <p className="font-display text-2xl text-pretty leading-snug">
              As experts and professionals, we work quickly, efficiently, and carefully to complete every job in a timely manner. Throughout the process, we remain in consistent communication with our clients to ensure expectations are not only met but exceeded — all while preserving and protecting our ecosystem.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Vision</span>
            <p className="font-display text-2xl text-pretty leading-snug">
              To preserve the ancient Rwandan wall-painting style and adapt it to modern wall painting.
            </p>
            <p className="font-display text-2xl text-pretty leading-snug">
              To help clients create the home, business, or commercial space of their dreams by providing the very highest quality products and working directly with them to capture their vision — we strive for nothing less than 100% customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-14">Core values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.t} className="bg-canvas p-8 space-y-3">
                <h3 className="font-display text-2xl">{v.t}</h3>
                <p className="text-ink/65 text-sm text-pretty leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-14">Milestones</h2>
          <ol className="space-y-10 border-l border-brand/20 pl-8">
            {timeline.map((m) => (
              <li key={m.y} className="relative">
                <span className="absolute -left-[37px] top-1 size-3 bg-gold rounded-full ring-4 ring-canvas" />
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">{m.y}</span>
                <h3 className="font-display text-2xl mt-2">{m.t}</h3>
                <p className="text-ink/65 mt-2 text-pretty leading-relaxed">{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Led by</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium">Henriette &amp; Delphine</h2>
          <p className="text-ink/65 max-w-xl mx-auto text-pretty leading-relaxed">
            Ubudasa Wall Paints Ltd is owned and led by Henriette and Delphine, based in Kicukiro District, Kigali.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}