/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_URL: process.env.API_URL
    },
    // basePath: '/red',
    images: {
        domains: ['localhost', 'static.thairath.co.th']
    }
}

module.exports = nextConfig
