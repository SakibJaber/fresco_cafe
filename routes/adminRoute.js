const router = require( "express" ).Router();

const {getOne}=require('../controllers/adminController')

router.get( "/users", getOne );

module.exports=router
