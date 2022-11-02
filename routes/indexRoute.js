const router = require( "express" ).Router();

const adminRoute = require( "./adminRoute" );

 const api = process.env.API_URL;

router.use( `${api}`, adminRoute );




module.exports = router;