// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

// const User = require("../models/userModel");
// const { checkPassword } = require("../lib/passwordValid");

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// passport.use(
//   new LocalStrategy(
//     // function of username, password, done(callback)
//     function (username, password, done) {
//       // look for the user data
//       User.findByUsername(username, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         // if user doesn't exist
//         if (!user) {
//           return done(null, false, { message: "User not found." });
//         }
//         if (!checkPassword(password, user.password, user.salt)) {
//           return done(null, false);
//         }

//         // if the user is properly authenticated
//         return done(null, user);
//       });
//     }
//   )
// );

///////////////////////////////////////////////

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/",
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          const user = await User.findOne({ googleId: profile.id });
          if (user) {
            done(null, user);
          } else {
            const newUser = new User({
              googleId: profile.id,
              name: profile.displayName,
              photo: profile.photos[0].value(),
            });
            await newUser.save();
            done(null, user);
          }
        } catch (error) {
          console.log(error);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
};
