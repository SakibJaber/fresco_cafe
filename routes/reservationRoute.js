const router = require( "express" ).Router();
const { validationRules,validate } = require("../validators/reservationValidation");

const {
    getReservation,
    postReservation,
  
} = require("../controllers/reservationController");



router.get("/", getReservation);
router.post("/",validationRules(),validate , postReservation);

module.exports = router;
