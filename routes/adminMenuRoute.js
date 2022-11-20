const router = require("express").Router();

const {
    getAddMenu,
    postMenu,
    getMenuList,

} = require("../controllers/menuController");

const { validationRules, validate } = require("../validators/menuValidation");


router.get("/menu", getAddMenu);
router.post("/menu", validationRules(), validate, postMenu);
router.get("/menus", getMenuList);



module.exports = router;
