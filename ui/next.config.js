/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "http://1.14.155.26:8888" },
        ],
      },
    ]
  },
}

module.exports = nextConfig
