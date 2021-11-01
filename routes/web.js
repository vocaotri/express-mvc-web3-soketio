const homeController = require("../app/controller/HomeController");
module.exports = async function (config) {
    let app = config.app;
    let abi = config.abi;
    app.get("/", homeController.home(abi, process.env.ADRSM));
  };