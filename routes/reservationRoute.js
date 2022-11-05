const router = require("express").Router();

const {
    getReservation,
  
} = require("../controllers/reservationController");



router.get("/", getReservation);

module.exports = router;
