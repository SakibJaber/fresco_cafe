const router = require("express").Router();

const {
  getReservationList,
  deleteReservation,
} = require("../controllers/reservationController");

router.get("/reservations", getReservationList);
router.post("/reservation/:id", deleteReservation);

module.exports = router;
