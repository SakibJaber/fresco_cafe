const router = require( "express" ).Router();

const { getAdmin, getCreateBlog,createBlog } = require( '../controllers/adminController' );

const { validationRules } = require("../validators/blogValidation");

router.get( "/", getAdmin );
router.get( "/create", getCreateBlog );
router.post( "/create",validationRules(), createBlog );

module.exports = router;
