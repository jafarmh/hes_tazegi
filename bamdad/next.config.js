/** @type {import('next').NextConfig} */
//const nextConfig = {}
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})


// const nextConfig={
//   output:"export"
// }

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },

  //output:"export",  
 
  });

//module.exports = nextConfig
