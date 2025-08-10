
import React from "react";

type Props = {
  imageSrc: string;
  title: string;      
  price: string;      
  topBadge?: string;  
  promo?: string;     
  onClick?: () => void;
};

export default function Card({
  imageSrc,
  title,
  price,
  topBadge = "RECARGA DIRECTA",
  promo = "10% D BONUS",
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-56 text-left rounded-2xl bg-white p-2 shadow-xs ring-1 ring-slate-200 transition
                 hover:-translate-y-0.5 hover:shadow-lg hover:ring-slate-300 focus:outline-hidden
                 focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      <div className="relative overflow-hidden rounded-xl">
        {/* image */}
        <img
          src={imageSrc}
          alt={title}
          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/0" />

        <div className="absolute left-2 top-2">
          <span className="rounded-md bg-yellow-400 px-2 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black shadow-xs">
            {topBadge}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-x-2 top-10 text-center">
          <span className="select-none text-2xl font-extrabold uppercase tracking-wider text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]">
            {title}
          </span>
        </div>

        {promo ? (
          <div className="absolute inset-x-0 bottom-2 flex justify-center">
            <span className="rounded-md bg-yellow-400 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black shadow-sm">
              {promo}
            </span>
          </div>
        ) : null}
      </div>

      <div className="px-2 pb-2 pt-3">
        <div className="line-clamp-1 text-sm font-extrabold uppercase text-slate-900">
          {title}
        </div>
        <div className="text-[15px] font-semibold text-indigo-700">$ {price}</div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-indigo-500/0 transition
                      group-hover:ring-2 group-hover:ring-indigo-500/20" />
    </button>
  );
}
