/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  env: {
    WA_NUMBER: process.env.WA_NUMBER || process.env.NEXT_PUBLIC_WA_NUMBER || '',
    NEXT_PUBLIC_WA_NUMBER: process.env.NEXT_PUBLIC_WA_NUMBER || process.env.WA_NUMBER || '',
  },
};

export default nextConfig;
