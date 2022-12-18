const router = require( "express" ).Router();

const { getContactList } = require( '../controllers/contactController' )



router.get("/contacts", getContactList);

module.exports = router;
