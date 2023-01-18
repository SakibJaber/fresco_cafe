const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   },
//   { timestamps: true }
// );

const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photos: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
