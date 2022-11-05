const router = require("express").Router();

const {
  getMenu,
  postMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menuController");



router.get("/", getMenu);
router.post("/", postMenu);
router.put("/", updateMenu);
router.delete("/", deleteMenu);

module.exports = router;
