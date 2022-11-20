const Post = require("../models/blogModel");

const getBlog = ( req, res ) => {
  res.render("frontend/blog", { layout: "main.hbs" });
};

const getSingleBlog = (req, res) => {
  res.render("frontend/blog-single", { layout: "main.hbs" });
};

const getAllBlog = (req, res) => {};

const getAddBlog = (req, res) => {
  res.render("dashboard/addBlog", { layout: "dashboardLayout.hbs" });
};

const getBlogList = (req, res) => {
  res.render("dashboard/blogList", { layout: "dashboardLayout.hbs" });
};



const postBlog = async (req, res) => {
  try {
    const newBlog = new Post({
      ...req.body,
    });
    await newBlog.save();
    return res.status(201).json({
      message: "Blog successfully Created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const updateBlog = (req, res) => {};
const deleteBlog = (req, res) => {};





module.exports = {
  getBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getAddBlog,
  postBlog,
  getBlogList
};
