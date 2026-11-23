import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/store/markham",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/store/guelph",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/store/toronto",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/store/mississauga",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/store/kingston",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/store/thornhill",
        destination: "/store/vaughan",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
