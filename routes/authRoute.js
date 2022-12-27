const router = require("express").Router();

const {
  validationRules,
  validate,
} = require("../validators/userValidator");
const {
  getRegister,
  getLogin,
  postRegister,
  postLogin,
  logout,
} = require("../controllers/userController");

const { isUnAuthenticated } = require("../middleware/authMiddleware");

router.get("/register", isUnAuthenticated, getRegister);
router.post(
  "/register",
  isUnAuthenticated,
  validationRules(),
  validate,
  postRegister
);
router.get("/login", isUnAuthenticated, getLogin);
router.post(
  "/login",
  isUnAuthenticated,
  
  postLogin
);
router.get("/logout", logout);

module.exports = router;
