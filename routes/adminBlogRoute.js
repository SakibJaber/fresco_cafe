const router = require("express").Router();

const {
  getAddBlog,
  postBlog,
  updateBlog,
  deleteBlog,
  getBlogList,

} = require("../controllers/blogController");

const { validationRules, validate } = require("../validators/blogValidation");


router.get("/blog", getAddBlog);
router.post( "/blog", validationRules(), validate, postBlog );
router.put('/blog/:id',updateBlog)
router.delete('/blog/:id',deleteBlog)

router.get("/blogs", getBlogList);



module.exports = router;
