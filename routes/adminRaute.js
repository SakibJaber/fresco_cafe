const router = require( "express" ).Router();

const { getAdmin, getCreateBlog,createBlog } = require( '../controllers/adminController' );

const { validationRules,validate } = require("../validators/blogValidation");

router.get( "/", getAdmin );
router.get( "/create", getCreateBlog );
router.post( "/create",validationRules(),validate, createBlog );

module.exports = router;
