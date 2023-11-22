/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  // trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: "",
  distDir: "out",
  output: "standalone",
};

module.exports = nextConfig;
