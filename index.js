const { urlencoded } = require("express");
var path = require('path');
const fs = require("fs");
let express = require("express");
let app = express();
require("dotenv").config();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(urlencoded({ extended: false }));
app.use(
  "/scripts",
  express.static(__dirname + "/node_modules/web3.js-browser/build/")
);
let server = require("http").Server(app);
let io = require("socket.io")(server);
let abi = fs.readFileSync("./abi.json").toString();

let config = {
  app: app,
  io: io,
  abi: abi,
};
io.on("connection", function (socket) {
  let id = socket.id;
  console.log("New connection: " + id);
});
server.listen(process.env.PORT || 3000, function (err) {
  if (err) console.error("Server error when start http");
  console.log("Server start at port: " + server.address().port);
});
require("./routes/web")(config);
