/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "github.com"
            },
            {
                hostname: "www.pw.live"
            }
        ]
    }
};

export default nextConfig;
