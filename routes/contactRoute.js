const router = require("express").Router();

const {
  validationRules,
  validate,
} = require("../validators/contactValidation");
const {
  getContact,
  postContact,
} = require("../controllers/contactController");

router.get("/", getContact);
router.post("/", validationRules(), validate, postContact);


module.exports = router;
