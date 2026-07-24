import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  basePath: "/sanjayagro",
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
