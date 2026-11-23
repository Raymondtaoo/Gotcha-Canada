export type MenuCategoryId =
  | "house-special"
  | "smoothie"
  | "slush"
  | "macchiato"
  | "qq-fresh-fruit-tea"
  | "fruit-tea"
  | "milk-tea"
  | "brown-sugar-fresh-milk"
  | "healthy-fresh-milk"
  | "soda"
  | "yogurt-series"
  | "redbull-slush"
  | "hand-crafted-tea"
  | "yakult-green-tea";

export type MenuAccentTone =
  | "matcha"
  | "boba"
  | "berry"
  | "mango"
  | "taro"
  | "citrus";

export type MenuBadge =
  | "popular"
  | "featured"
  | "signature"
  | "caffeine-free"
  | "dairy-free"
  | "contains-dairy"
  | "hot-available"
  | "cold-only";

export interface MenuItemRating {
  /** Positive approval percentage on Uber Eats, e.g. 96 for "96%". */
  positivePercent: number;
  /** Number of customer reviews, e.g. 31. */
  reviewCount: number;
}

export interface MenuPrice {
  /** Primary CAD base price (numeric, e.g. 7.49). */
  base: number;
  /** Optional explicit cup size label (e.g. "XL" or "L"). */
  sizeLabel?: "M" | "L" | "XL";
  /** Optional multi-size price overrides if available in future. */
  sizes?: Partial<Record<"M" | "L" | "XL", number>>;
  currency: "CAD";
}

export interface MenuItemImage {
  /** Local image path under /images/... */
  src: string;
  alt: string;
  width: number;
  height: number;
  isCategoryFallback?: boolean;
}

export interface MenuItem {
  /** Stable kebab-case unique identifier. */
  id: string;
  categoryId: MenuCategoryId;
  nameEn: string;
  nameZh?: string;
  description: string;
  descriptionZh?: string;
  price: MenuPrice;
  rating?: MenuItemRating;
  isFeatured?: boolean;
  /** Rank among top-liked featured drinks (1, 2, or 3). */
  mostLikedRank?: 1 | 2 | 3;
  isPopular?: boolean;
  badges?: MenuBadge[];
  includedToppings?: string[];
  notes?: string;
  image?: MenuItemImage;
}

export interface MenuCategory {
  id: MenuCategoryId;
  nameEn: string;
  nameZh: string;
  subtitle: string;
  description?: string;
  sortOrder: number;
  accentTone: MenuAccentTone;
  bannerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface CustomizationOption {
  label: string;
  labelZh?: string;
  note?: string;
}

export interface CustomizationGroup {
  id: "temperature" | "sweetness" | "ice" | "toppings";
  labelEn: string;
  labelZh: string;
  description: string;
  options: CustomizationOption[];
}
