import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: "public", // Output untuk service worker
  disable: process.env.NODE_ENV === "development", // Nonaktifkan PWA di mode development
  register: true, // Register service worker otomatis
  skipWaiting: true, // Mengganti service worker lama tanpa menunggu
//   reactStrictMode: true, // Aktifkan mode ketat React
});

export default nextConfig;