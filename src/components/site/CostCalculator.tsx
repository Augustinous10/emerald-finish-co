import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const tiers = {
  Standard: { rate: 3500, days: 0.04 },
  Premium: { rate: 6500, days: 0.06 },
  Luxury: { rate: 11000, days: 0.09 },
} as const;

type Tier = keyof typeof tiers;

function fmtRWF(n: number) {
  return new Intl.NumberFormat("en-RW").format(Math.round(n / 1000) * 1000);
}

export function CostCalculator() {
  const [area, setArea] = useState(45);
  const [tier, setTier] = useState<Tier>("Premium");
  const [coats, setCoats] = useState(2);

  const { low, high, days } = useMemo(() => {
    const base = area * tiers[tier].rate * (coats / 2);
    const d = Math.max(2, Math.ceil(area * tiers[tier].days * (coats / 2)));
    return { low: base * 0.9, high: base * 1.18, days: d };
  }, [area, tier, coats]);

  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="space-y-6 text-canvas">
        <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
          Instant Estimation
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-balance">
          Plan your project in real time.
        </h2>
        <p className="text-canvas/75 text-pretty leading-relaxed">
          Move the sliders to estimate your wall finishing investment based on
          room area, finish quality, and number of coats. Kigali market rates,
          updated monthly.
        </p>
        <div className="space-y-3 pt-4">
          <div className="p-5 border border-canvas/15 rounded-md flex justify-between items-center">
            <span className="text-canvas/60 text-sm uppercase tracking-widest">Estimated Cost</span>
            <span className="font-display text-xl md:text-2xl text-gold">
              {fmtRWF(low)} – {fmtRWF(high)} RWF
            </span>
          </div>
          <div className="p-5 border border-canvas/15 rounded-md flex justify-between items-center">
            <span className="text-canvas/60 text-sm uppercase tracking-widest">Working Days</span>
            <span className="font-display text-xl md:text-2xl">
              {days}–{days + 2} days
            </span>
          </div>
        </div>
      </div>

      <div className="bg-canvas p-8 md:p-10 rounded-md text-ink space-y-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.3)]">
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60">
              Wall Area
            </label>
            <span className="text-sm font-medium text-brand">{area} m²</span>
          </div>
          <input
            type="range"
            min={10}
            max={400}
            value={area}
            onChange={(e) => setArea(+e.target.value)}
            className="w-full accent-brand"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60">
            Quality Tier
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(tiers) as Tier[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTier(t)}
                className={`py-3 text-xs uppercase tracking-widest border rounded-sm transition-colors ${
                  tier === t
                    ? "bg-brand text-canvas border-brand"
                    : "bg-secondary border-black/10 text-ink hover:border-brand"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60">
              Coats
            </label>
            <span className="text-sm font-medium text-brand">{coats}</span>
          </div>
          <input
            type="range"
            min={1}
            max={3}
            value={coats}
            onChange={(e) => setCoats(+e.target.value)}
            className="w-full accent-brand"
          />
        </div>

        <Link
          to="/request-quote"
          className="block text-center w-full bg-brand text-brand-foreground py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-ink transition-colors"
        >
          Get Exact Quote
        </Link>
      </div>
    </div>
  );
}