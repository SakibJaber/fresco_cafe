const Post = require("../models/blogModel");

const getAddBlog = (req, res) => {
  res.render("dashboard/addBlog", { layout: "dashboardLayout.hbs" });
};
const getBlogList = (req, res) => {
  res.render("dashboard/blogList", { layout: "dashboardLayout.hbs" });
};

const postAddBlog = async (req, res) => {
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



module.exports = {
  getAddBlog,
  postAddBlog,
  getBlogList
};
