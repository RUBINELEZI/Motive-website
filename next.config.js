/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["motive-admin.herokuapp.com", "res.cloudinary.com"]
  }
};

module.exports = nextConfig;
