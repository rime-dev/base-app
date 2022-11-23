const PROXY_CONFIG = [
  {
    context: '/posts',
    target: 'http://localhost:3000',
    secure: true,
    logLevel: 'debug',
    changeOrigin: true,
  },
];
module.exports = PROXY_CONFIG;
