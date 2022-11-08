
const router = require( "express" ).Router();

const {  getAdminProfile } = require( '../controllers/adminProfileController' );

router.get( "/profile", getAdminProfile );

module.exports = router;
