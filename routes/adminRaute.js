const router = require( "express" ).Router();

const { getAdmin,getAddChef,postAddChef} = require( '../controllers/adminController' );



router.get( "/", getAdmin );



module.exports = router;
