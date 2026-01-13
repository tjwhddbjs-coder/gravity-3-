/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    // Ensure these match your GitHub repository name exactly
    basePath: '/gravity-3-',
    assetPrefix: '/gravity-3-/',
    trailingSlash: true, // Helps with 404s on static hosting
};

export default nextConfig;
