const router = require("express").Router();
const passport = require("passport");

const { validationRules, validate } = require("../validators/userValidator");
const {
  getRegister,
  getLogin,
  postRegister,
  postLogin,
  logout,
} = require("../controllers/userController");

const { isUnAuthenticated } = require("../middleware/authMiddleware");

router.get("/register", isUnAuthenticated, getRegister);

// router.post(
//   "/register",
//   isUnAuthenticated,
//   validationRules(),
//   validate,
//   postRegister
// );
router.get("/login", isUnAuthenticated, getLogin);

// router.post(
//   "/login",
//   isUnAuthenticated,

//   postLogin
// );

router.get("/logout", logout);

////////////////////////////////////////////

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/admin");
  }
);

module.exports = router;
