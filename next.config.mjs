import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveAlias: {
      react: './node_modules/react',
      'react-dom': './node_modules/react-dom',
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      };
    }
    return config;
  },
  images: {
    qualities: [75, 80, 85, 90, 100],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        hostname: 'api.microlink.io',
      },
    ],
  },
};

export default nextConfig;
