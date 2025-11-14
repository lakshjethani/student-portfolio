/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
      { protocol: 'https', hostname: 'logo.clearbit.com' }
    ]
  },
  // Avoid eval()-based sourcemaps in dev which can trip some extensions
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'cheap-module-source-map'
    }
    return config
  }
}

module.exports = nextConfig
