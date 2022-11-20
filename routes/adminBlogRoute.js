const router = require("express").Router();

const {
  getAddBlog,
  postAddBlog,

  getBlogList,

} = require("../controllers/adminBlogController");

const { validationRules, validate } = require("../validators/blogValidation");


router.get("/blog", getAddBlog);
router.post("/blog", validationRules(), validate, postAddBlog);

router.get("/blogs", getBlogList);



module.exports = router;
