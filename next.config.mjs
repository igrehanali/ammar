/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc", "example.com", "localhost"], // List of allowed image domains
  },
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Enable SWC minification
};

export default nextConfig; // Use export default for ES modules
