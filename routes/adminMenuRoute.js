const router = require("express").Router();

const {
  getAddMenu,
  postMenu,
  updateMenu,
  deleteMenu,
  getMenuList,
} = require("../controllers/menuController");

const { validationRules, validate } = require("../validators/menuValidation");

router.get("/menu", getAddMenu);
router.post("/menu", validationRules(), validate, postMenu);
router.put("/menu/:id", updateMenu);
router.delete("/menu/:id", deleteMenu);

router.get("/menus", getMenuList);

module.exports = router;
