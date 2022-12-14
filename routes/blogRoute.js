const router = require("express").Router();

const {
  getBlog,
  getSingleBlog,
} = require("../controllers/blogController");



router.get("/", getBlog);
router.get("/single/:id", getSingleBlog);



module.exports = router;
