/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} */

module.exports = () => {
  return {
     reactStrictMode: true,
  swcMinify: true,
    images: {
      domains: ["websiteimages.nyc3.cdn.digitaloceanspaces.com", "i.ytimg.com"],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    reactStrictMode: true,
  };
};
