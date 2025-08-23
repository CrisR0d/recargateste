import * as React from "react";
import { Link } from "react-router-dom";
import { GameCard, GameCardProps } from "../Card/GameCard";

export type ScrollableSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  items: Array<Omit<GameCardProps, "className">>;
  className?: string;
  cardWidth?: number;
  seeAllHref?: string;
};

export default function ScrollableSection({
  id,
  title,
  subtitle,
  items,
  className = "",
  cardWidth = 176,
  seeAllHref,
}: ScrollableSectionProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);
  const gap = 16;

  const update = React.useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  React.useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    update();
    const onScroll = () => update();
    el.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    viewportRef.current?.scrollBy({ left: dir * (cardWidth + gap) * 1.2, behavior: "smooth" });
  };

  return (
    <section id={id} className={`relative w-full ${className}`}>
      
      <div className=" flex items-end justify-between">
        <div>
          <h2 className="text-sm font-black tracking-widest text-pink-400">{title}</h2>
          {subtitle && <p className="text-xs text-white/70">{subtitle}</p>}
        </div>
        {seeAllHref && (
          <Link
            to={seeAllHref}
            className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            See all
          </Link>
        )}
      </div>

      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        disabled={!canLeft}
        className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 ring-1 ring-white/20  transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
          <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        disabled={!canRight}
        className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-full bg-primary p-2 ring-1 ring-white/20  transition  disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
          <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={viewportRef}
        className="p-1 relative flex gap-4 overflow-x-auto overscroll-x-contain rounded-2xl snap-x snap-mandatory"
        role="group"
        aria-roledescription="slide"
      >
        {items.map((it, idx) => (
          <div key={idx} className="snap-start shrink-0">
            <GameCard {...it} />
          </div>
        ))}

        <div style={{ minWidth: 8 }} aria-hidden />
      </div>
    </section>
  );
}