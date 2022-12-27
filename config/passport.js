const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/userModel");
const { checkPassword } = require("../lib/passwordValid");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    // function of username, password, done(callback)
    function (username, password, done) {
      // look for the user data
      User.findByUsername(username, (err, user) => {
        if (err) {
          return done(err);
        }
        // if user doesn't exist
        if (!user) {
          return done(null, false, { message: "User not found." });
        }
        if (!checkPassword(password, user.password, user.salt)) {
          return done(null, false);
        }

        // if the user is properly authenticated
        return done(null, user);
      });
    }
  )
);
