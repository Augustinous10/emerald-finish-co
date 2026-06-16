import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import fallback from "@/assets/hero.jpg";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Painting, Gypsum & Renovation | Ubudasa" },
      { name: "description", content: "Browse Ubudasa Wall Paints' portfolio of premium interior painting, decorative finishes, gypsum ceilings, kitchens and full renovations across Rwanda." },
      { property: "og:title", content: "Ubudasa Project Gallery — Transforming Spaces in Rwanda" },
      { property: "og:description", content: "Real projects, real craftsmanship. Explore our finished interiors, exteriors, ceilings and bespoke wall designs." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const modules = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

type Item = { src: string; name: string; category: string };

function buildItems(): Item[] {
  const entries = Object.entries(modules)
    .map(([path, src]) => {
      const file = path.split("/").pop() ?? "";
      const base = file.replace(/\.[^.]+$/, "");
      // Filename convention: "category--title.jpg" e.g. "interior--green-living.jpg"
      const [rawCat, rawTitle] = base.includes("--") ? base.split("--") : ["all", base];
      const category = rawCat.replace(/[-_]/g, " ").trim().toLowerCase();
      const name = (rawTitle ?? base)
        .replace(/^\d+[-_]?/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase())
        .trim();
      return { src, name, category };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  if (entries.length > 0) return entries;

  // Fallback placeholders so the page never looks empty
  return Array.from({ length: 6 }).map((_, i) => ({
    src: fallback,
    name: `Featured Project ${i + 1}`,
    category: "featured",
  }));
}

function Gallery() {
  const fileItems = useMemo(buildItems, []);
  const [dbItems, setDbItems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("gallery_projects")
        .select("title, category, image_path")
        .eq("published", true)
        .order("sort_order");
      if (!data?.length) return;
      const resolved = await Promise.all(
        data.map(async (p) => {
          const { data: signed } = await supabase.storage.from("gallery").createSignedUrl(p.image_path, 60 * 60 * 24 * 7);
          return signed?.signedUrl
            ? { src: signed.signedUrl, name: p.title, category: p.category }
            : null;
        }),
      );
      setDbItems(resolved.filter(Boolean) as Item[]);
    })();
  }, []);

  const items = useMemo(() => {
    const merged = [...dbItems, ...fileItems];
    // If db has items, prefer DB-only; otherwise fall back to filesystem
    return dbItems.length > 0 ? dbItems : merged;
  }, [dbItems, fileItems]);

  const categories = useMemo(() => {
    const set = new Set<string>(items.map((i) => i.category));
    return ["all", ...Array.from(set).sort()];
  }, [items]);

  const [active, setActive] = useState<string>("all");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />

      <section className="pt-40 pb-16 px-6 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Portfolio</p>
        <h1 className="font-display text-5xl md:text-7xl text-brand leading-[1.05] max-w-4xl">
          Spaces we've transformed across Rwanda.
        </h1>
        <p className="mt-6 max-w-2xl text-ink/70 text-lg">
          A living archive of interiors, exteriors, gypsum ceilings, decorative finishes and full
          renovations — each delivered to the Ubudasa standard.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-colors ${
                active === c
                  ? "bg-brand text-brand-foreground border-brand"
                  : "bg-transparent text-ink border-black/15 hover:border-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <button
              key={`${item.src}-${idx}`}
              type="button"
              onClick={() => setLightbox(item)}
              className="mb-6 block w-full break-inside-avoid group relative overflow-hidden rounded-md bg-ink/5"
            >
              <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{item.category}</p>
                <p className="font-display text-xl text-canvas mt-1">{item.name}</p>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink/60 py-20">No projects in this category yet.</p>
        )}
      </section>

      <section className="bg-brand text-brand-foreground py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl">Your space could be next.</h2>
          <p className="mt-4 text-canvas/80 max-w-xl mx-auto">
            Tell us about your project and our team will visit, measure, and design a finish that
            elevates your space.
          </p>
          <Link
            to="/request-quote"
            className="inline-block mt-8 bg-gold text-brand px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-canvas transition-colors"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>

      <Footer />

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-canvas p-2 hover:text-gold"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <figure className="max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.name}
              className="max-h-[80vh] w-auto mx-auto object-contain rounded"
            />
            <figcaption className="text-center mt-4 text-canvas">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{lightbox.category}</p>
              <p className="font-display text-2xl mt-1">{lightbox.name}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}