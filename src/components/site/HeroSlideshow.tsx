import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import fallbackHero from "@/assets/hero.jpg";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  body: string;
};

// Auto-import every image dropped into src/assets/hero/.
// Drop new JPG/PNG/WEBP files there and they'll appear in the slideshow.
const imported = import.meta.glob("@/assets/hero/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const heroImages: string[] = (() => {
  const list = Object.entries(imported)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
  return list.length > 0 ? list : [fallbackHero];
})();

type Props = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export function HeroSlideshow({ slides, intervalMs = 5000 }: Props) {
  const images = useMemo(() => heroImages, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  const slide = slides[index % slides.length];

  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          width={1920}
          height={1280}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100 animate-kenburns" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/70 via-brand/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 md:pb-32">
        <div key={index} className="max-w-2xl space-y-8 animate-fade-up">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold">
            {slide.eyebrow}
          </span>
          <h1 className="font-display text-canvas text-5xl md:text-7xl leading-[1.05] text-balance font-medium">
            {slide.title}
          </h1>
          <p className="text-canvas/80 text-lg max-w-xl text-pretty">{slide.body}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-canvas transition-colors"
            >
              Request Quote <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-canvas/10 backdrop-blur-md text-canvas border border-canvas/30 px-7 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-canvas/20 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-8 right-6 hidden md:flex items-center gap-2 max-w-[60%] flex-wrap justify-end">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-px transition-all ${i === index ? "w-12 bg-gold" : "w-5 bg-canvas/40"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}