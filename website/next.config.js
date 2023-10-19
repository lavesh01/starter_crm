/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  env: { 
    BASE_URL: "http://localhost:3000",
    SMTP_AUTH_USER: "support@eurasiaglobal.net",
    SMTP_AUTH_PASS: "Support@8090551004",
    GOOGLE_SITE_KEY: "6LfNAasoAAAAAC-FnPXYeFC79OlR4-OAySqrVor7"
  } 
};

module.exports = nextConfig;
