import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "images.unsplash.com",
      "cms.markscherrenberg.com",
      "mscms.markscherrenberg.com",
      "notion.so",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "www.notion.so",
      "localhost",
    ],
    dangerouslyAllowSVG: true,
  },
};

const withMDX = createMDX({});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
