/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    base_url: "my-value",
    base_url_api: "http://localhost:8000",
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
