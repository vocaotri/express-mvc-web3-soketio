const mainUrl = "front/pages/home/";
exports.home = function (abi, adrsm) {
  return async (req, res) => {
    res.render(mainUrl + "index", {
      app_name: process.env.APP_NAME,
      abi: abi,
      adrsm: adrsm,
    });
  };
};
