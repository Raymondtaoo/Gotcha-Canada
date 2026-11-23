import type {
  ActiveStoreSlug,
  StoreLocation,
  StoreProvince,
} from "@/types/store";

export const RETIRED_STORE_SLUGS = ["markham", "guelph", "toronto"] as const;

export const STORES: StoreLocation[] = [
  {
    slug: "oakville",
    name: "Gotcha Bubble Tea Oakville",
    shortName: "Oakville",
    status: "active",
    isFlagship: true,
    province: "ON",
    provinceName: "Ontario",
    tagline: "Our flagship Ontario tea bar in Upper Oakville Shopping Centre.",
    address: {
      street: "1011 Upper Middle Rd E",
      unit: "Unit E4",
      city: "Oakville",
      province: "ON",
      postalCode: "L6H 4L3",
      country: "CA",
      formatted: "1011 Upper Middle Rd E, Unit E4, Oakville, ON L6H 4L3",
      landmark: "Upper Oakville Shopping Centre",
    },
    phone: "(905) 845-8088",
    coordinates: {
      lat: 43.48211134588206,
      lng: -79.69605731106158,
    },
    hours: [
      {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        label: "Sun – Thu",
        opens: "11:00",
        closes: "22:00",
        displayHours: "11:00 AM – 10:00 PM",
      },
      {
        days: ["Friday", "Saturday"],
        label: "Fri – Sat",
        opens: "11:00",
        closes: "23:00",
        displayHours: "11:00 AM – 11:00 PM",
      },
    ],
    hoursNote:
      "Uber Eats delivery menu typically available daily 11:00 AM – 10:45 PM.",
    image: {
      src: "/images/oak2.webp",
      width: 1600,
      height: 1200,
      alt: "Interior counter and cozy seating at Gotcha Bubble Tea Oakville",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.969117390023!2d-79.69863212335699!3d43.48211487111073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b43e0ebc8ca9b%3A0xe14e7d05dcc84e41!2sGotcha%20Bubble%20Tea%20Oakville!5e0!3m2!1sen!2sca!4v1707974157774!5m2!1sen!2sca",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gotcha+Bubble+Tea+Oakville+1011+Upper+Middle+Rd+E+Oakville+ON+L6H+4L3",
    orderLinks: {
      uberEats:
        "https://www.ubereats.com/ca/store/gotcha-bubble-tea/IKTPrKVgUbqEUQIy-tHyHw",
      googleFood:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11s5d_vx47&orderType=1&utm_source=share",
    },
    instagramUrl: "https://www.instagram.com/gotchabubbletea_oakville/",
  },
  {
    slug: "mississauga",
    name: "Gotcha Bubble Tea Mississauga",
    shortName: "Mississauga",
    status: "active",
    province: "ON",
    provinceName: "Ontario",
    tagline:
      "Late-night handcrafted bubble tea & desserts on Platinum Drive.",
    address: {
      street: "3525 Platinum Dr",
      unit: "Unit 121",
      city: "Mississauga",
      province: "ON",
      postalCode: "L5M 7N4",
      country: "CA",
      formatted: "3525 Platinum Dr, Unit 121, Mississauga, ON L5M 7N4",
    },
    phone: "(905) 607-8688",
    coordinates: {
      lat: 43.53711455854843,
      lng: -79.72829308981629,
    },
    hours: [
      {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        label: "Sun – Thu",
        opens: "12:00",
        closes: "23:45",
        displayHours: "12:00 PM – 11:45 PM",
      },
      {
        days: ["Friday", "Saturday"],
        label: "Fri – Sat",
        opens: "12:00",
        closes: "00:45",
        displayHours: "12:00 PM – 12:45 AM",
      },
    ],
    image: {
      src: "/images/miss.webp",
      width: 1243,
      height: 1600,
      alt: "Gotcha Bubble Tea Mississauga storefront and interior",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46277.3511075549!2d-79.76942712033271!3d43.53706990338318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b435691943bf5%3A0x8d23cb40bbe7593d!2sGotcha%20Bubble%20Tea%20Mississauga!5e0!3m2!1sen!2sca!4v1707978211207!5m2!1sen!2sca",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gotcha+Bubble+Tea+Mississauga+3525+Platinum+Dr+Mississauga+ON+L5M+7N4",
    orderLinks: {
      uberEats:
        "https://www.ubereats.com/ca/store/gotcha-bubble-tea-platinum-dr/VG2csKGuXcOFJxsHVJkTDQ",
      googleFood:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11s2pgxn0_&orderType=1&utm_source=share",
    },
  },
  {
    slug: "thornhill",
    name: "Gotcha Bubble Tea Thornhill",
    shortName: "Thornhill",
    status: "active",
    province: "ON",
    provinceName: "Ontario",
    tagline:
      "Serving fresh Taiwanese tea, cheese foam macchiatos & fruit teas on Steeles.",
    address: {
      street: "800 Steeles Ave W",
      unit: "Unit B21",
      city: "Thornhill",
      province: "ON",
      postalCode: "L4J 7L2",
      country: "CA",
      formatted: "800 Steeles Ave W, Unit B21, Thornhill, ON L4J 7L2",
    },
    phone: "(905) 597-2188",
    coordinates: {
      lat: 43.793452866234816,
      lng: -79.44746549351676,
    },
    hours: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        label: "Daily",
        opens: "11:00",
        closes: "22:45",
        displayHours: "11:00 AM – 10:45 PM",
      },
    ],
    image: {
      src: "/images/thorn.webp",
      width: 1200,
      height: 1600,
      alt: "Gotcha Bubble Tea Thornhill tea bar",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0079404810376!2d-79.45003982334303!3d43.79344827109574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2dee92ae2c63%3A0xd1a9b35fe1a7ea56!2sGOTCHA%20Fresh%20Tea-%20Thornhill!5e0!3m2!1sen!2sca!4v1707979622792!5m2!1sen!2sca",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gotcha+Fresh+Tea+Thornhill+800+Steeles+Ave+W+Thornhill+ON+L4J+7L2",
    orderLinks: {
      uberEats:
        "https://www.ubereats.com/ca/store/gotcha-bubble-tea/w8ktJFSLSzWDBzs5KsMc7g",
      googleFood:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11m46ttd0b&orderType=1&utm_source=share",
    },
  },
  {
    slug: "kingston",
    name: "Gotcha Bubble Tea Kingston",
    shortName: "Kingston",
    status: "active",
    province: "ON",
    provinceName: "Ontario",
    tagline: "Handcrafted bubble tea & fruit teas in downtown Kingston.",
    address: {
      street: "330 Princess St",
      city: "Kingston",
      province: "ON",
      postalCode: "K7L 1B6",
      country: "CA",
      formatted: "330 Princess St, Kingston, ON K7L 1B6",
      landmark: "Downtown Kingston",
    },
    coordinates: {
      lat: 44.23253399610409,
      lng: -76.48972245292981,
    },
    hours: [
      {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        label: "Sun – Thu",
        opens: "12:00",
        closes: "22:00",
        displayHours: "12:00 PM – 10:00 PM",
      },
      {
        days: ["Friday", "Saturday"],
        label: "Fri – Sat",
        opens: "12:00",
        closes: "22:00",
        displayHours: "12:00 PM – 10:00 PM",
      },
    ],
    hoursNote:
      "Weekend evening hours may vary; check Uber Eats for live availability.",
    image: {
      src: "/images/king.webp",
      width: 1600,
      height: 1200,
      alt: "Gotcha Bubble Tea Kingston location on Princess Street",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.3816016227074!2d-76.49101026103222!3d44.23253339277019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2abd0ec8f4f87%3A0xac92fddf4baa0302!2sGotcha%20Bubble%20Tea!5e0!3m2!1sen!2sca!4v1707980083188!5m2!1sen!2sca",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gotcha+Bubble+Tea+Kingston+330+Princess+St+Kingston+ON+K7L+1B6",
    orderLinks: {
      uberEats:
        "https://www.ubereats.com/ca/store/gotcha-bubble-tea/FSsGWtJnUAizXPC7_wiQOA",
      googleFood:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11sycfvk87&orderType=1&utm_source=share",
    },
  },
  {
    slug: "calgary",
    name: "Gotcha Bubble Tea Calgary",
    shortName: "Calgary",
    status: "active",
    province: "AB",
    provinceName: "Alberta",
    tagline:
      "Downtown Calgary's luxury Taiwanese tea bar inside The CORE Shopping Centre.",
    address: {
      street: "751 3 St SW",
      unit: "Suite 410 (Level 4 Food Court)",
      city: "Calgary",
      province: "AB",
      postalCode: "T2P 4K8",
      country: "CA",
      formatted: "751 3 St SW, Level 4 Food Court, Calgary, AB T2P 4K8",
      landmark: "The CORE Shopping Centre",
    },
    phone: "(403) 454-0630",
    coordinates: {
      lat: 51.04610911174132,
      lng: -114.07106705269788,
    },
    hours: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        label: "Mon – Sat",
        opens: "10:00",
        closes: "17:45",
        displayHours: "10:00 AM – 5:45 PM",
      },
      {
        days: ["Sunday"],
        label: "Sun",
        opens: "12:00",
        closes: "16:45",
        displayHours: "12:00 PM – 4:45 PM",
      },
    ],
    hoursNote: "Located on Level 4 Food Court; hours follow mall schedule.",
    image: {
      src: "/images/calgary.webp",
      width: 1600,
      height: 1200,
      alt: "Gotcha Bubble Tea Calgary inside The CORE Shopping Centre",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.77373902647474!2d-114.07124541959244!3d51.04607412119486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f00607c4d91%3A0xaac228197fece027!2sGotcha%20Bubble%20Tea!5e0!3m2!1sen!2sca!4v1726612342581!5m2!1sen!2sca",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gotcha+Bubble+Tea+Calgary+751+3+St+SW+Calgary+AB+T2P+4K8",
    orderLinks: {
      doorDash:
        "https://www.doordash.com/store/gotcha-bubble-tea-calgary-29922116/",
      googleFood:
        "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11y7fyp89r&orderType=1&utm_source=share",
    },
  },
];

export const ACTIVE_STORES: StoreLocation[] = STORES.filter(
  (store) => store.status === "active"
);

export const FLAGSHIP_STORE: StoreLocation =
  ACTIVE_STORES.find((store) => store.isFlagship) ?? ACTIVE_STORES[0];

export function getStoreBySlug(slug: string): StoreLocation | undefined {
  return ACTIVE_STORES.find(
    (store) => store.slug === (slug as ActiveStoreSlug)
  );
}

export function getStoresByProvince(province: StoreProvince): StoreLocation[] {
  return ACTIVE_STORES.filter((store) => store.province === province);
}
