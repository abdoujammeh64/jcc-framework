const { ApiRoute, getApiController } = require("../jcc");

const JccController = getApiController("JccController");
const { body } = require("express-validator");

ApiRoute.get("/", (req, res) => {
  return res.json({ message: "Hello,World" });
});

ApiRoute.prefix("/jcc").group((Route) => {
  Route.get("/", JccController.index);
  Route.post("/", [JccController.store]);
  Route.post("/login", JccController.login);
  Route.get("/:jcc", JccController.show);
});
