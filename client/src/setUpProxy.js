const { createProxyMiddleware } = require("http-proxy-middleware");
const serverUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://studify.onrender.com";
module.exports = function (app) {
  app.use(
    ["/admin", "/user", "/course"],
    createProxyMiddleware({
      target: serverUrl,
    })
  );
  app.use(
    ["/user"],
    createProxyMiddleware({
      target: serverUrl,
    })
  );
  // app.use(
  //   ["/"],
  //   createProxyMiddleware({
  //     target: "http://localhost:5000",
  //   })
  // );
};
