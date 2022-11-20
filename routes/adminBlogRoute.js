const router = require("express").Router();

const {
  getAddBlog,
  postBlog,
  getBlogList,

} = require("../controllers/blogController");

const { validationRules, validate } = require("../validators/blogValidation");


router.get("/blog", getAddBlog);
router.post("/blog", validationRules(), validate, postBlog);

router.get("/blogs", getBlogList);



module.exports = router;
