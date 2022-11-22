
const router = require("express").Router();

const {
  getAddChef,
  getChefList,
  postChef,
  updateChef,
  deleteChef
} = require("../controllers/chefController");


router.get("/chef", getAddChef);
router.get("/chefs", getChefList);
router.post("/chef", postChef);
router.put("/chef/:id", updateChef);
router.delete("/chef/:id", deleteChef);

module.exports = router;
