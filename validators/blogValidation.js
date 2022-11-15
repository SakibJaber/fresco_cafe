const { check } = require("express-validator");

const validationRules = () => {
  return [
    check("title")
      .trim()
      .isLength({ min: 2, max: 128 })
      .withMessage("Title must be between 2 and 128 characters long"),
    check("description")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Story must be atleast 2 characters long"),
    check("image", "You must select an image.").notEmpty(),
  ];
};

module.exports = {
  validationRules,
};
