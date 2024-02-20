import type { AppProps } from "next/app";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Fredoka } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fredoka = Fredoka({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={fredoka.className}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}

export default MyApp;
