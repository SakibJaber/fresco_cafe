const router = require("express").Router();

const {
    getAddMenu,
    postAddMenu,
    getMenuList,

} = require("../controllers/adminMenuController");

const { validationRules, validate } = require("../validators/menuValidation");


router.get("/menu", getAddMenu);
router.post("/menu", validationRules(), validate, postAddMenu);
router.get("/menus", getMenuList);



module.exports = router;
