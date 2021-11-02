const { isUser } = require("../app/middleware/IsUser");
const homeController = require("../app/controller/HomeController");
module.exports = async function (config) {
  let app = config.app;
  let abi = config.abi;
  app.get("/", isUser, homeController.home(abi, process.env.ADRSM));
};
