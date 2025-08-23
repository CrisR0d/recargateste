import { Link } from "react-router-dom";
import * as React from "react";

export type GameCardProps = {
  title: string;
  price: string; // e.g. "$4.99"
  imageUrl: string;
  tag?: string; // e.g. "1CS BONUS"
  href?: string; // if provided, wraps in <Link>
  onClick?: () => void;
  className?: string;
  /**
   * visual density; `compact` mimics the screenshot
   * `cozy` is a bit larger, `comfortable` larger yet
   */
  variant?: "compact" | "cozy" | "comfortable";
};

export const VARIANT_CARD = {
  compact: {
    cardPad: "p-2",
    title: "text-sm",
    price: "text-xs",
    cover: "aspect-[3/4]",
    width: "w-[176px]",
  },
  cozy: {
    cardPad: "p-2.5",
    title: "text-[0.95rem]",
    price: "text-sm",
    cover: "aspect-[3/4]",
    width: "w-[192px]",
  },
  comfortable: {
    cardPad: "p-3",
    title: "text-base",
    price: "text-sm",
    cover: "aspect-[3/4]",
    width: "w-[208px]",
  },
} as const;

export const GameCard = ({ title, price, imageUrl, tag, href, onClick, className = "", variant = "cozy" }: GameCardProps) => {
  const v = VARIANT_CARD[variant];
  const body = (
    <article
      className={
        `${v.width} select-none rounded-2xl bg-gradient-to-b from-indigo-700 to-indigo-900 ${v.cardPad}
         ring-1 ring-white/10  transition-transform duration-200 hover:-translate-y-1.5 hover:shadow-xl
         active:translate-y-0 focus-within:ring-2 focus-within:ring-white/50 ${className}`
      }
      onClick={onClick}
    >
      {/* Cover */}
      <div className={`relative ${v.cover} w-full overflow-hidden rounded-xl ring-1 ring-white/10`}>
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        {tag && (
          <div className="absolute left-2 top-2 rounded-md bg-yellow-400 px-2 py-0.5 text-[10px] font-black tracking-wide text-black shadow-sm">
            {tag}
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="mt-2 px-1 pb-1">
        <h3 className={`line-clamp-1 ${v.title} font-extrabold tracking-wide text-white`}>{title}</h3>
        <p className={`${v.price} font-semibold text-white/85`}>{price}</p>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link to={href} className="outline-none">
        {body}
      </Link>
    );
  }
  return body;
}
