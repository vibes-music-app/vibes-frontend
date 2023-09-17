/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
                port: "",
                pathname: "/*",
            },
            {
                protocol: "http",
                hostname: "10.33.136.17",
                port: "8080",
                pathname: "/*",
            },
        ],
    },
};

module.exports = nextConfig;
