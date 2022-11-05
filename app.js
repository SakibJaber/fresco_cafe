require("dotenv").config();
const express = require( "express" );
// const exphbs = require('express-handlebars');
const { engine } = require("express-handlebars");
// const path = require("path");

const router = require("./routes/indexRoute");

const app = express();

// VIEW ENGINE SETUP

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));

// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));

// SET STATIC PATH
// const staticPath = path.join(__dirname, "./public");
// app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

module.exports = app;
