/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
        pathname: '/assets/elements/icons/swift/swift-256x256_2x.png'
      },
      {
        protocol: 'https',
        hostname: 'mongoosejs.com',
        pathname: '/docs/images/mongoose5_62x30_transparent.png'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/jtqsy5pye0zd/6wNuQ2xMvbw134rccObi0q/bf61badc6d6d9780609e541713f0bba6/Contentful_Logo_2.5_Dark.svg'
      },
      {
        protocol: 'https',
        hostname: 'www.thecoderschool.com',
        pathname: '/locations/img/logostacked-white-shadow.png'
      },
      {
        protocol: 'https',
        hostname: 'd1nmxxg9d5tdo.cloudfront.net',
        pathname: '/8514/logos/large/Chimney_Lakes.png'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:all.(svg|jpg|png|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
