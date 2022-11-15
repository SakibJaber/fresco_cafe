require("dotenv").config();
const express = require( "express" );

const { engine } = require("express-handlebars");
const path = require("path");

const router = require("./routes/indexRoute");

const app = express();

// VIEW ENGINE SETUP

app.engine( '.hbs', engine( {
    extname: '.hbs',
    defaultView: 'frontend/index',
    layoutsDir:__dirname+'/views/layouts'
} ) );
app.set('view engine', '.hbs');
app.set('views', './views');




// SET STATIC PATH
app.use( express.static( path.join( __dirname, 'public' ) ) );


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

module.exports = app;
