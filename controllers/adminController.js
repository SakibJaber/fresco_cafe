const Post = require( "../models/blogModel" );

const getAdmin = (req, res) => {
  res.render("dashboard/dashboardHome", { layout: "dashboardLayout.hbs" });
};

const getCreateBlog = (req, res) => {
  res.render("dashboard/createPost", { layout: "dashboardLayout.hbs" });
};

const createBlog = async (req, res) => {
  try {
    const newBlog = new Post({
      ...req.body,
    });
    await newBlog.save();
    return res.status(201).json({
      message: "Post successfully Created",
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
  getAdmin,
  getCreateBlog,
  createBlog,
};
