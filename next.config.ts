import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000, // Intervalo de polling (en ms)
                aggregateTimeout: 300, // Tiempo de retraso antes de recompilar
            };
        }
        return config;
    }
};

export default nextConfig;
