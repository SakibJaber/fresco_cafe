const router = require( "express" ).Router();

const {homeControll}=require('../controllers/homeController')
const {postReservation}=require('../controllers/reservationController')

router.get( "/", homeControll );
router.post( "/", postReservation );

module.exports=router
