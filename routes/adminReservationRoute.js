const router = require( "express" ).Router();

const { getReservationList } = require( '../controllers/reservationController' )



router.get("/reservations", getReservationList);

module.exports = router;
