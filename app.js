require("dotenv").config();
const express = require( "express" );
const cors = require( 'cors' );
const fileUpload = require('express-fileupload');
const { engine } = require("express-handlebars");
const path = require("path");

const router = require("./routes/indexRoute");

const app = express();


app.use(cors());
app.options( '*', cors() );
app.use(fileUpload());
// app.use(fileUpload());

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


app.use(express.urlencoded({ extended: true }));
app.use( express.json() );

app.use(router);

module.exports = app;
