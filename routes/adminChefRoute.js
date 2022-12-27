const router = require("express").Router();

const {
  getAddChef,
  getChefList,
  postChef,
  editChef,
  updateChef,
  deleteChef,
} = require("../controllers/chefController");

const { validationRules, validate } = require("../validators/chefValidation");

router.get("/chef", getAddChef);
router.get("/chefs", getChefList);
router.post("/chef", validationRules(), validate, postChef);
router.get("/chef/:id/edit", editChef);
router.post("/chef/:id/update",  updateChef);
router.post("/chef/:id", deleteChef);

module.exports = router;
