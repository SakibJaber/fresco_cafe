const { check, validationResult } = require("express-validator");

const validationRules = () => {
  return [
    check("title")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Title must be atleast 2 characters long"),
    check("description")
      .trim()
      .isLength({ min: 2 })
      .withMessage("Post must be atleast 2 characters long"),
    check("image", "You must select an image."),
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
