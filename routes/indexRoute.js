const router = require("express").Router();

const homeRoute = require("./homeRoute");
const menuRoute = require( "./menuRoute" );
const chefRoute = require( './chefRoute' );
const contactRoute = require('./contactRoute')
const blogRoute = require('./blogRoute')
const aboutRoute = require('./aboutRoute')
const reservationRoute = require( './reservationRoute' )


// ADMIN
const adminRoute = require( './adminRaute' )
const adminProfile = require( './adminProfile' )





router.use( `/`, homeRoute );
router.use( `/menu`, menuRoute );
router.use( `/chef`, chefRoute );
router.use( `/contact`, contactRoute );
router.use( `/blog`, blogRoute );
router.use( `/about`, aboutRoute );
router.use( `/reservation`, reservationRoute );

// DASHBOARD
router.use( `/admin`, adminRoute );
router.use( `/profile`, adminProfile );



// API ROUTES

// const api = process.env.API_URL;

// router.use(`${api}/menu`, menuRoute);




module.exports = router;
