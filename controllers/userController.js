// const { validationResult } = require("express-validator");
// const passport = require("passport");
// const { genPassword } = require("../lib/passwordValid");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const validateEmail = async (email) => {
  let user = await User.findOne({ email });
  if (user) {
    return true;
  } else {
    return false;
  }
};

const getRegister = (req, res) => {
  res.render("dashboard/register", { layout: "auth.hbs" });
};

const getLogin = (req, res) => {
  res.render("dashboard/login", { layout: "auth.hbs" });
};

// const postRegister = async (req, res) => {
//   const errors = validationResult(req);
//   const data = req.body;
//   if (!errors.isEmpty()) {
//     res.send({ errors: errors.mapped(), formdata: data });
//   } else {
//     const newUser = new User({
//       ...req.body,
//       password: genPassword(req.body.password),
//     });
//     await User.register(newUser, req.body.password, function (err, user) {
//       if (err) {
//         return res.status(500).json({ messsage: "error occored", err });
//       }
//       console.log("data insert");
//       passport.authencate("local")(req, res, (err) => {
//         if (err) {
//           return res.status(500).json({ messsage: "Authentication error" });
//         }
//         return res.status(201).json({ messsage: "Authenticated" });
//       });
//     });
//   }
// };

// const postLogin = async (req, res) => {
//   const errors = validationResult(req);
//   const data = req.body;
//   if (!errors.isEmpty()) {
//     res.send({ errors: errors.mapped(), formdata: data });
//   } else {
//     passport.authenticate("local")(req, res, () => {
//       User.findOne(
//         {
//           username: req.body.username,
//         },
//         (err, person) => {
//           if (err) {
//             return res.json({
//               status: "Logine Filed",
//             });
//           }
//           return res.json({
//             success: true,
//             status: "login Success",
//             user: person,
//           });
//         }
//       );
//     });
//   }
// };

// const logout = async (req, res) => {
//   if (req.isAuthenticated()) {
//     req.logout();
//     req.session.destroy((err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.clearCookie("session-id");
//         res.json({
//           message: "You are successfully logged out!",
//         });
//       }
//     });
//   } else {
//     var err = new Error("You are not logged in!");
//     err.status = 403;
//     next(err);
//   }
//   // req.logout();
//   // res.status(200).send({message:'User Logged Out'})
// };

//////////////////////////////////////////////

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
