const { check, validationResult } = require("express-validator");

const validationRules = () => {
  return [
    check("name")
      .trim()
      .isLength({ min: 2, max: 32 })
      .withMessage("Name must be between 2 and 32 characters long"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("email is required")
      .bail()
      .isEmail()
      .withMessage("email not valid"),
    check("phone", "Invlid Number")
      .trim()
      .isLength({ min: 10, max: 13 })
      .notEmpty(),
    check("bookingDate", "Must be a valid date").notEmpty(),

    check("bookingTime", "Must be a valid Time").notEmpty(),
    check("guest", "Must have a guest").notEmpty(),
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
