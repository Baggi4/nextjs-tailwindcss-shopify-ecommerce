/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
		domains: ['cdn.sanity.io', "tailwindui.com"]
	}
}

module.exports = nextConfig
