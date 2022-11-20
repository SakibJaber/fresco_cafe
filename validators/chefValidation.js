const { check, validationResult } = require("express-validator");

const validationRules = () => {
  return [
    check("name")
      .trim()
      .isLength({ min: 2, max: 32 })
      .withMessage("Title must be between 2 and 32 characters long"),
    check("designation")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Post must be atleast 2 characters long"),
    check("photo", "You must select an image.").notEmpty(),
    check("about", "Must have about").notEmpty(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validationRules,
  validate,
};
