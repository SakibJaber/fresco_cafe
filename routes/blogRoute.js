const router = require("express").Router();

const {
  getBlog,
  getAllBlog,
  getSingleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getBlog);
router.get("/", getAllBlog);
router.get("/single", getSingleBlog);
router.post("/", postBlog);
router.put("/", updateBlog);
router.delete("/", deleteBlog);

module.exports = router;
