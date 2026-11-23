export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type StoreProvince = "ON" | "AB";

export type ActiveStoreSlug = "oakville" | "vaughan" | "calgary";

export interface OpeningHoursEntry {
  /** Days of week mapped directly to schema.org openingHoursSpecification. */
  days: DayOfWeek[];
  /** Compact human-readable day label, e.g. "Sun – Thu". */
  label: string;
  /** 24-hour opening time ("HH:MM"), e.g. "11:00". */
  opens: string;
  /** 24-hour closing time ("HH:MM"), e.g. "22:00". */
  closes: string;
  /** Formatted display hours, e.g. "11:00 AM – 10:00 PM". */
  displayHours: string;
}

export interface StoreOrderLinks {
  uberEats?: string;
  doorDash?: string;
  googleFood?: string;
  skipTheDishes?: string;
}

export interface StoreAddress {
  street: string;
  unit?: string;
  city: string;
  province: StoreProvince;
  postalCode: string;
  country: "CA";
  formatted: string;
  landmark?: string;
}

export interface StoreLocation {
  slug: ActiveStoreSlug;
  name: string;
  shortName: string;
  status: "active" | "closed";
  isFlagship?: boolean;
  province: StoreProvince;
  provinceName: "Ontario" | "Alberta";
  tagline: string;
  address: StoreAddress;
  /** Omitted cleanly when a store has no public phone line. */
  phone?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: OpeningHoursEntry[];
  hoursNote?: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  orderLinks: StoreOrderLinks;
  instagramUrl?: string;
}
