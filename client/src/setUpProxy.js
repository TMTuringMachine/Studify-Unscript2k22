const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/admin", "/user", "/course"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
  app.use(
    ["/user"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
  // app.use(
  //   ["/"],
  //   createProxyMiddleware({
  //     target: "http://localhost:5000",
  //   })
  // );
};
