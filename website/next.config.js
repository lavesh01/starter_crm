/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  env: { 
    BASE_URL: "http://localhost:3000",
  } 
};

module.exports = nextConfig;
