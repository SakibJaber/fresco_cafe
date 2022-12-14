const router = require("express").Router();

const {
  getChef,
  updateChef,
  deleteChef,
} = require("../controllers/chefController");

router.get("/", getChef);

router.put("/", updateChef);
router.delete("/", deleteChef);

module.exports = router;
