const { parsed: localEnv } = require('dotenv').config({ path: '.env.local' })

module.exports = {
  env: {
    ...localEnv,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ]
  },
}