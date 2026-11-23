const cadFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DAY_ORDER = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const DAY_ABBR: Record<string, string> = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

export interface FormattableHoursEntry {
  days: readonly string[];
  opens: string;
  closes: string;
}

/**
 * Formats a numeric CAD price consistently (e.g. 7.99 -> "$7.99").
 */
export function formatCadPrice(amount: number): string {
  return cadFormatter.format(amount);
}

/**
 * Normalizes a North American display phone number into a valid `tel:` href
 * (e.g. "(905) 845-8088" -> "tel:+19058458088"). Returns empty string if no digits.
 */
export function toTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return `tel:+${digits}`;
}

/**
 * Converts a 24-hour "HH:MM" time string into 12-hour display format
 * (e.g. "11:00" -> "11:00 AM", "22:45" -> "10:45 PM", "00:45" -> "12:45 AM").
 */
export function formatTime12h(time24: string): string {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time24.trim());
  if (!match) return time24;

  const rawHour = Number(match[1]);
  const minutes = match[2];
  if (Number.isNaN(rawHour) || rawHour < 0 || rawHour > 24) return time24;

  const normalizedHour = rawHour % 24;
  const period = normalizedHour >= 12 ? "PM" : "AM";
  const hour12 = normalizedHour % 12 || 12;

  return `${hour12}:${minutes} ${period}`;
}

/**
 * Formats an opening/closing time pair (e.g. "11:00 AM – 10:45 PM").
 */
export function formatHoursRange(opens: string, closes: string): string {
  return `${formatTime12h(opens)} – ${formatTime12h(closes)}`;
}

/**
 * Formats a list of day names into a compact readable label
 * (e.g. all 7 -> "Daily", Sun..Thu -> "Sun – Thu", Fri..Sat -> "Fri – Sat").
 */
export function formatDaysLabel(days: readonly string[]): string {
  if (days.length === 0) return "";
  if (days.length === 7) return "Daily";

  const abbr = (day: string) => DAY_ABBR[day] ?? day;
  if (days.length === 1) return abbr(days[0]);

  const indices = days.map((d) =>
    DAY_ORDER.indexOf(d as (typeof DAY_ORDER)[number])
  );
  const allKnown = indices.every((idx) => idx !== -1);

  if (allKnown) {
    let isConsecutive = true;
    for (let i = 1; i < indices.length; i++) {
      if ((indices[i - 1] + 1) % 7 !== indices[i]) {
        isConsecutive = false;
        break;
      }
    }
    if (isConsecutive) {
      return `${abbr(days[0])} – ${abbr(days[days.length - 1])}`;
    }
  }

  return days.map(abbr).join(", ");
}

/**
 * Formats a structured opening-hours entry for UI display.
 */
export function formatOpeningHoursEntry(entry: FormattableHoursEntry): {
  daysLabel: string;
  timeRange: string;
  formatted: string;
} {
  const daysLabel = formatDaysLabel(entry.days);
  const timeRange = formatHoursRange(entry.opens, entry.closes);
  return {
    daysLabel,
    timeRange,
    formatted: daysLabel ? `${daysLabel}: ${timeRange}` : timeRange,
  };
}
