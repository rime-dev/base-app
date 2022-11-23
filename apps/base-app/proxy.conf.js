const PROXY_CONFIG = [
  {
    context: '/posts',
    target: 'https://jsonplaceholder.typicode.com',
    secure: true,
    logLevel: 'debug',
    changeOrigin: true,
  },
];
module.exports = PROXY_CONFIG;
