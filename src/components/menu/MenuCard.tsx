import Image from "next/image";
import { Sparkles, Star } from "lucide-react";
import { formatCadPrice } from "@/lib/format";
import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const showSoloThumb = Boolean(item.image && !item.image.isCategoryFallback);

  return (
    <article className="flex flex-col justify-between gap-3 rounded-2xl border border-border bg-surface p-4 transition-all hover:border-matcha-500/60 hover:shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-3.5">
        <div className="min-w-0 flex-1">
          {(item.mostLikedRank ||
            item.isFeatured ||
            item.isPopular ||
            item.rating) && (
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              {item.mostLikedRank && (
                <span className="inline-flex items-center rounded-full bg-boba-700 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                  #{item.mostLikedRank} Most Liked
                </span>
              )}
              {item.isFeatured && !item.mostLikedRank && (
                <span className="inline-flex items-center gap-1 rounded-full bg-boba-100 px-2.5 py-0.5 text-[11px] font-semibold text-boba-700">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Featured
                </span>
              )}
              {item.isPopular && (
                <span className="inline-flex items-center rounded-full bg-matcha-100 px-2.5 py-0.5 text-[11px] font-semibold text-matcha-900">
                  Popular
                </span>
              )}
              {item.rating && (
                <span
                  className="inline-flex items-center gap-1 rounded-full bg-surface-warm px-2.5 py-0.5 text-[11px] font-semibold text-ink"
                  aria-label={`${item.rating.positivePercent}% positive from ${item.rating.reviewCount} reviews`}
                >
                  <Star
                    className="h-3 w-3 fill-boba-500 text-boba-500"
                    aria-hidden="true"
                  />
                  {item.rating.positivePercent}% ({item.rating.reviewCount})
                </span>
              )}
            </div>
          )}

          <div className="flex items-baseline justify-between gap-3">
            <h4 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
              {item.nameEn}
            </h4>
            {!showSoloThumb && (
              <div className="flex shrink-0 items-center gap-1.5">
                {item.price.sizeLabel && (
                  <span className="rounded-md bg-surface-warm px-1.5 py-0.5 text-[11px] font-semibold text-ink-muted">
                    {item.price.sizeLabel}
                  </span>
                )}
                <span className="font-display text-base font-bold text-matcha-900 sm:text-lg">
                  {formatCadPrice(item.price.base)}
                </span>
              </div>
            )}
          </div>

          {item.nameZh && (
            <p className="mt-0.5 text-sm text-ink-muted">{item.nameZh}</p>
          )}

          {showSoloThumb && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="font-display text-base font-bold text-matcha-900">
                {formatCadPrice(item.price.base)}
              </span>
              {item.price.sizeLabel && (
                <span className="rounded-md bg-surface-warm px-1.5 py-0.5 text-[11px] font-semibold text-ink-muted">
                  {item.price.sizeLabel}
                </span>
              )}
            </div>
          )}

          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {item.description}
          </p>
        </div>

        {showSoloThumb && item.image && (
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/70 bg-surface-warm sm:h-24 sm:w-24">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {(item.includedToppings?.length || item.notes) && (
        <div className="space-y-2 border-t border-border/70 pt-3">
          {item.includedToppings && item.includedToppings.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.includedToppings.map((topping) => (
                <span
                  key={topping}
                  className="rounded-full bg-matcha-100 px-2.5 py-0.5 text-xs font-medium text-matcha-900"
                >
                  {topping}
                </span>
              ))}
            </div>
          )}
          {item.notes && (
            <p className="text-xs italic text-ink-muted">{item.notes}</p>
          )}
        </div>
      )}
    </article>
  );
}

export default MenuCard;
