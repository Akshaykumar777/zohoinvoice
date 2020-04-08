var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var bodyparser = require("body-parser");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const invoice = require("./routes/Invoice");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/invoice", invoice);

app.listen(4000, () => {
  console.log("running on port 4000");
  app.get("/", (req, res) => res.send("Working fine"));
});

module.exports = app;
