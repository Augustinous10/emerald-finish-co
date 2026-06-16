import { useRef, useState, useCallback } from "react";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const draggingRef = useRef(false);

  const updateFromEvent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video rounded-md overflow-hidden select-none cursor-ew-resize bg-black"
      onMouseDown={(e) => {
        draggingRef.current = true;
        updateFromEvent(e.clientX);
      }}
      onMouseMove={(e) => draggingRef.current && updateFromEvent(e.clientX)}
      onMouseUp={() => (draggingRef.current = false)}
      onMouseLeave={() => (draggingRef.current = false)}
      onTouchStart={(e) => updateFromEvent(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromEvent(e.touches[0].clientX)}
    >
      <img src={afterSrc} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerRef.current?.clientWidth ?? "100vw", maxWidth: "none" }}
          draggable={false}
        />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-canvas shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-11 bg-canvas rounded-full grid place-items-center ring-4 ring-black/10">
          <div className="flex gap-1">
            <div className="w-0.5 h-3.5 bg-ink/50" />
            <div className="w-0.5 h-3.5 bg-ink/50" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-canvas px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
        Before
      </div>
      <div className="absolute bottom-6 right-6 bg-brand/80 backdrop-blur-md text-canvas px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
        After
      </div>
    </div>
  );
}