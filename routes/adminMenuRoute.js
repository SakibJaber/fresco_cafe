const router = require("express").Router();

const {
  getAddMenu,
  postMenu,
  editMenu,
  updateMenu,
  deleteMenu,
  getMenuList,
} = require("../controllers/menuController");

const { validationRules, validate } = require("../validators/menuValidation");

router.get("/menu", getAddMenu);
router.post("/menu", validationRules(), validate, postMenu);
router.get("/menu/:id/edit", editMenu);
router.post("/menu/:id/update", updateMenu);
router.post("/menu/:id", deleteMenu);

router.get("/menus", getMenuList);

module.exports = router;
