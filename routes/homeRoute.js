const router = require( "express" ).Router();

const {homeControll}=require('../controllers/homeController')

router.get( "/", homeControll );

module.exports=router
