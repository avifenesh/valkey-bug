import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];

      // Externalize anything from @valkey/valkey-glide
      config.externals.push(
        (context: any, request: string, callback: (error?: null, result?: string) => void) => {
          if (request?.startsWith("@valkey/valkey-glide")) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        }
      );
    }

    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    return config;
  },
};

export default nextConfig;
