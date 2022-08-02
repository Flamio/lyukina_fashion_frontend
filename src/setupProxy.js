const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://v1295395.hosted-by-vdsina.ru/',
      changeOrigin: true,
    })
  );
};