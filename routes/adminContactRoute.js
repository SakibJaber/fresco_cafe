const router = require("express").Router();

const {
  getContactList,
  deleteContact,
} = require("../controllers/contactController");

router.get("/contacts", getContactList);
router.post("/contact/:id", deleteContact);

module.exports = router;
