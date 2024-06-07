/** @type {import('next').NextConfig} */
const nextConfig = { images: { unoptimized: true } }
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}
module.exports = nextConfig
