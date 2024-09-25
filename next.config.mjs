/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  images: {
    domains: ['media.istockphoto.com', 'plus.unsplash.com', 'cdn2.iconfinder.com', 'cdn3.iconfinder.com', 'cdn0.iconfinder.com'],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Применение ко всем страницам
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
