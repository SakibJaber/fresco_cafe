const router = require("express").Router();

const {
  getAddBlog,
  postBlog,
  editBlog,
  updateBlog,
  deleteBlog,
  getBlogList,
} = require("../controllers/blogController");

const { validationRules, validate } = require("../validators/blogValidation");

router.get("/blog", getAddBlog);
router.post("/blog", validationRules(), validate, postBlog);
router.get("/blog/:id/edit", editBlog);
router.post("/blog/:id/update", validationRules(), validate, updateBlog);
router.post("/blog/:id", deleteBlog);

router.get("/blogs", getBlogList);

module.exports = router;
