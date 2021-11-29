const { AdminRoute } = require("../jcc");

AdminRoute.get("/", (req, res) => {
  return res.send("<h1>Hello, World</h1>");
});
