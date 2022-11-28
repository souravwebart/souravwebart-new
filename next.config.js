/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "https://souravwebart-3q4hwcqzt-souravwebart.vercel.app/",
  },
}

module.exports = nextConfig
