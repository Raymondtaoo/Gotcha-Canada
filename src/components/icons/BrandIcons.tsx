import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AppStoreIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M16.365 12.69c-.022-2.208 1.805-3.276 1.888-3.326-1.033-1.508-2.637-1.71-3.204-1.734-1.351-.139-2.658.807-3.347.807-.701 0-1.763-.79-2.905-.767-1.484.022-2.866.87-3.627 2.2-1.56 2.704-.398 6.695 1.106 8.886.743 1.07 1.62 2.266 2.771 2.223 1.123-.046 1.545-.72 2.9-.72 1.345 0 1.736.72 2.912.695 1.206-.02 1.964-1.084 2.694-2.162.864-1.253 1.212-2.482 1.23-2.545-.027-.011-2.393-.918-2.418-3.557ZM14.17 6.197c.608-.747 1.023-1.771.908-2.805-.878.037-1.964.594-2.593 1.326-.555.643-1.05 1.693-.922 2.702.982.076 1.99-.487 2.607-1.223Z" />
    </svg>
  );
}

export function GooglePlayIcon({ className = "h-5 w-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M4.6 2.86a1.45 1.45 0 0 0-.6 1.2v15.88c0 .5.23.94.6 1.2l9.16-9.14L4.6 2.86Zm10.22 8.08 2.8-2.8-10.7-6.1a1.5 1.5 0 0 0-1.24-.12l9.14 9.02Zm0 2.12-9.14 9.02c.4.14.85.1 1.24-.12l10.7-6.1-2.8-2.8Zm3.87-2.2-2.8 1.6 2.8 1.6 1.88-1.07a1.15 1.15 0 0 0 0-2.06l-1.88-1.07Z" />
    </svg>
  );
}

export function UberEatsIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <path d="M10 13.5h4" />
    </svg>
  );
}

export function DoorDashIcon({ className = "h-4 w-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M21.92 9.18A5.57 5.57 0 0 0 16.95 6H2l1.82 3.16h12.88c1.1 0 1.98.89 1.98 1.98 0 1.1-.88 1.99-1.98 1.99H10.1L8.28 16.3h8.67a5.58 5.58 0 0 0 4.97-7.12Z" />
    </svg>
  );
}
