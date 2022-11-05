const router = require( "express" ).Router();

const { getChef,postChef,updateChef,deleteChef } = require( '../controllers/chefController' );

router.get( "/", getChef );
router.post( "/", postChef );
router.put( "/", updateChef );
router.delete( "/", deleteChef );

module.exports = router;
