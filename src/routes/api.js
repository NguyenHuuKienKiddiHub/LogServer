const express = require("express");
const APIController = require("../controllers/APIController");
let router = express.Router();
const initWebRoute = (app) => {
  router.get("/", APIController.getHomePage);
  router.post("/log", APIController.logBehaviour);
  router.get("/log/list", APIController.getLogList);
  return app.use("/", router);
};
module.exports = initWebRoute;
