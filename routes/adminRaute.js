const router = require( "express" ).Router();

const { getAdmin } = require( '../controllers/adminController' );

router.get( "/", getAdmin );

module.exports = router;
