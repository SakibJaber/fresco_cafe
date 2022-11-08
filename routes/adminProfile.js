
const router = require( "express" ).Router();

const {  getAdminProfile } = require( '../controllers/adminProfileController' );

router.get( "/", getAdminProfile );

module.exports = router;
