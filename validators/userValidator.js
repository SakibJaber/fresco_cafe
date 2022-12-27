const { check, validationResult } = require("express-validator");

const validationRules = () => {
  return [
		check("email")
			.trim()
			.isEmail()
			.normalizeEmail()
			.withMessage("Please Enter a valid email address"),
		check("username")
			.trim()
			.isLength({ max: 20 })
			.withMessage("Name must be under 20 characters"),
		check("password")
			.trim()
			.isLength({ min: 6, max: 16 })
			.withMessage("Password must be between 6 and 16 characters"),
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
