// src/components/HeroCarousel.tsx
import * as React from "react";

export type HeroSlide = {
  id: string | number;
  title: string;          
  description?: string;    
  ctaLabel?: string;     
  onCta?: () => void;     
  imageUrl: string;       
  imageAlt?: string;
  bgClassName?: string;
};

export type HeroCarouselProps = {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayMs?: number;
  className?: string;
  heightClass?: string;
};

export default function HeroCarousel({
  slides,
  autoPlay = true,
  autoPlayMs = 4500,
  className = "",
  heightClass = "h-56 sm:h-64 md:h-72 lg:h-80",
}: HeroCarouselProps) {
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const count = slides.length;

  const go = React.useCallback((i: number) => {
    setIndex((prev) => {
      const next = (i + count) % count;
      return next;
    });
  }, [count]);

  const next = React.useCallback(() => go(index + 1), [index, go]);
  const prev = React.useCallback(() => go(index - 1), [index, go]);

  React.useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const t = setTimeout(() => {
      next();
    }, autoPlayMs);
    return () => clearTimeout(t);
  }, [index, next, autoPlay, autoPlayMs, count]);

  // keyboard
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let startX = 0;
    let currentX = 0;
    let dragging = false;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      currentX = e.clientX;
      el.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      currentX = e.clientX;
      const delta = currentX - startX;
      el.style.setProperty("--drag-x", `${delta}px`);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      const delta = currentX - startX;
      el.style.removeProperty("--drag-x");
      if (Math.abs(delta) > 60) {
        delta < 0 ? next() : prev();
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, [next, prev]);

  return (
    <section
      className={`relative w-full ${className}`}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
    >
      <div className={`overflow-hidden rounded-3xl  ring-1 ring-white/10 ${heightClass}`}>
        
        <div
          ref={trackRef}
          className="flex h-full touch-pan-y select-none"
          style={{
            transform: `translateX(calc(${-index * 100}% + var(--drag-x, 0px)))`,
            transition: "transform 450ms cubic-bezier(.22,.61,.36,1)",
            width: `${count * 100}%`,
          }}
        >
          {slides.map((s, i) => (
            <HeroSlideCard key={s.id} slide={s} active={i === index} />
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20 text-white"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/20 text-white"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}

function HeroSlideCard({ slide, active }: { slide: HeroSlide; active: boolean }) {
  return (
    <article className="grid h-full w-full flex-[0_0_100%] grid-cols-1 md:grid-cols-2">
      <div className={`relative rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 ring-1 ring-white/10  bg-gradient-to-br ${slide.bgClassName || "from-indigo-800 to-violet-900"}`}>
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="relative z-10 flex h-full flex-col justify-center">
          <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {slide.title}
          </h3>
          {slide.description && (
            <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base md:mt-4">
              {slide.description}
            </p>
          )}
          {slide.ctaLabel && (
            <div className="mt-6">
              <button
                type="button"
                onClick={slide.onCta}
                className="rounded-xl bg-pink-500 px-5 py-2.5 text-sm font-bold text-white shadow-md ring-1 ring-white/20 transition hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
              >
                {slide.ctaLabel}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* image panel */}
      <div className="relative hidden items-center justify-center md:flex">
        <img
          src={slide.imageUrl}
          alt={slide.imageAlt || "slide"}
          className={`max-h-[85%] w-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] transition-opacity duration-500 ${active ? "opacity-100" : "opacity-70"}`}
        />
      </div>
    </article>
  );
}

// Example usage
// const slides: HeroSlide[] = [
//   {
//     id: 1,
//     title: "YOUR CURRENCY HEADLINE",
//     description: "Et suscipit qui et vitae adipisci rem beatae",
//     ctaLabel: "Buy Now",
//     onCta: () => alert("Buy Now"),
//     imageUrl: "/img/hero-1.png",
//     bgClassName: "from-indigo-900 to-blue-900",
//   },
//   {
//     id: 2,
//     title: "Top Up Instantly",
//     description: "Fast delivery. Global coverage. No nonsense.",
//     ctaLabel: "Get Started",
//     imageUrl: "/img/hero-2.png",
//     bgClassName: "from-violet-800 to-fuchsia-900",
//   },
// ];
//
// <HeroCarousel slides={slides} />
