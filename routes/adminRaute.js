const router = require( "express" ).Router();

const { getAdmin,getCreateBlog } = require( '../controllers/adminController' );

router.get( "/", getAdmin );
router.get( "/create", getCreateBlog );

module.exports = router;
