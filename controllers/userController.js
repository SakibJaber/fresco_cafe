const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getRegister = (req, res) => {
  res.render("dashboard/register", { layout: "auth.hbs" });
};

const getLogin = (req, res) => {
  res.render("dashboard/login", { layout: "auth.hbs" });
};

const postRegister = async (req, res) => {
  let { username, email, password } = req.body;

  try {
    let hashedPassword = await bcrypt.hash(password, 11);

    let user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    req.toastr.success("Successfully Register");
    res.redirect("/admin");
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const postLogin = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      req.toastr.warning("Please Provide Valid email");
      res.redirect("/register");
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      req.toastr.warning("Please Provide Valid Credentials");
      res.redirect("/register");
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save((err) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      req.toastr.success("Successfully Logged In");
      res.redirect("/admin");
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const logout = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    return res.redirect("/");
  });
};

module.exports = {
  getRegister,
  getLogin,
  postRegister,
  postLogin,
  logout,
};
