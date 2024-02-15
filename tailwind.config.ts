import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // white
        secondary: 'rgba(193,208,119,255)', // logo green
        banner: 'rgba(163, 199, 109, 255)', // another green
      },
    },
  },
  plugins: [],
};
export default config;
