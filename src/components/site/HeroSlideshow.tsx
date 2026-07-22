import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

type Slide = {
  eyebrow: string;
  title: string;
  body: string;
  img: string;
};

export function HeroSlideshow({
  slides,
  interval = 6000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [next, interval, paused]);

  return (
    <section
      className="relative h-[92vh] min-h-[560px] overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.title}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover"
            style={{ animation: i === active ? "heroZoom 8s ease-out forwards" : "none" }}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-24 w-full">
          <div className="max-w-2xl text-canvas">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
              {slides[active].eyebrow}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-medium mt-4 leading-[1.05] text-balance">
              {slides[active].title}
            </h1>
            <p className="text-canvas/80 text-lg mt-5 max-w-lg text-pretty">
              {slides[active].body}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/request-quote"
                className="bg-gold text-gold-foreground px-7 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-canvas transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/services"
                className="border border-canvas/40 text-canvas px-7 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-canvas/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-12">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "2.5rem" : "1.25rem",
                  backgroundColor: i === active ? "#C9A227" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          img { animation: none !important; }
        }
      `}</style>
    </section>
  );
}