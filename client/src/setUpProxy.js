const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/admin"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    ["/"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
  app.use(
    ["/"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};