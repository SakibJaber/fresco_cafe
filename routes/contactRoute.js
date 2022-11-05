const router = require("express").Router();

const { getContact, postContact } = require("../controllers/contactController");

router.get("/", getContact);
router.post("/", postContact);

module.exports = router;
