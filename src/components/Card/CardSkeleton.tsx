import { VARIANT_CARD } from "./GameCard";

export const CardSkeleton = ({ variant = "compact" as const }) => {
  const v = VARIANT_CARD[variant];
  return (
    <div className={`${v.width} animate-pulse rounded-2xl bg-gradient-to-b from-indigo-700 to-indigo-900 ${v.cardPad} ring-1 ring-white/10`}>
      <div className={`relative ${v.cover} w-full overflow-hidden rounded-xl bg-white/10`} />
      <div className="mt-2 space-y-1 px-1 pb-1">
        <div className="h-3 w-3/4 rounded bg-white/20" />
        <div className="h-2.5 w-1/3 rounded bg-white/15" />
      </div>
    </div>
  );
}
