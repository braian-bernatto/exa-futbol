/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'localhost']
  },
  env: {
    backendURL: 'http://localhost:1337'
  }
}

module.exports = nextConfig
