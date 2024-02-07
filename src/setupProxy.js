const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/rest/internal/2/productsearch/search?counts=projects%3D5&type=projects',
        createProxyMiddleware({
            target: 'https://connecture.atlassian.net',
            changeOrigin: true,
        })
    );
};
