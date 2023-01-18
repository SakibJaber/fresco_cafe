require("dotenv").config();
const express = require("express");
const cors = require("cors");

const fileUpload = require("express-fileupload");
const { engine } = require("express-handlebars");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const toastr = require("express-toastr");
const passport = require("passport");
require("./config/passport");
const MongoDBStore = require("connect-mongodb-session")(session);

const router = require("./routes/indexRoute");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

require("./config/passport")(passport);
app.use(cors());
app.options("*", cors());
app.use(fileUpload());

// VIEW ENGINE SETUP

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultView: "frontend/index",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(cookieParser("secret"));

const store = new MongoDBStore({
  uri: process.env.DB_URI,
  collection: "sessions",
  expires: 1000 * 60 * 60 * 2,
});
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use(flash());
app.use(toastr());
app.use(function (req, res, next) {
  res.locals.toasts = req.toastr.render();
  next();
});

// SET STATIC PATH
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.session({ secret: process.env.SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use(function (req, res, next) {
  res.status(404);
  res.render("dashboard/error404");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

module.exports = { app, server, io };
