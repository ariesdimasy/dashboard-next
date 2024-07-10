/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["http://localhost:8000"],
  },
  env: {
    base_url: "my-value",
    base_url_api: "http://localhost:8000",
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "8000",
  //       pathname: "/**",
  //     },
  //   ],
  // },
};

export default nextConfig;
