const Post = require("../models/blogModel");

const getBlog = (req, res) => {
  Post.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        title: el.title,
        description: el.description,
        image: el.image,
        id: el._id,
        createdAt: el.createdAt,
      });
    });
    res.render("frontend/blog", {
      title: "Blog",
      layout: "main.hbs",
      data: data,
    });
  });
};

const getSingleBlog = (req, res) => {
  Post.findById(req.params.id)
    .then((blog) => {
      // blog list
      const details = {
        title: blog.title,
        
        description: blog.description,
        image: blog.image,
      };
      res.render("frontend/blog-single", {
        title: "Blog",
        layout: "main.hbs",
        blog: details,
      });
    })
    .catch((err) => {
      res.json({ error: "Somethiong went wrong!" });
    });
};

const getAddBlog = (req, res) => {
  res.render("dashboard/addBlog", { layout: "dashboardLayout.hbs" });
};

const getBlogList = (req, res) => {
  Post.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        title: el.title,
        description: el.description,
        image: el.image,
      });
    });
    res.render("dashboard/blogList", {
      title: "Blog",
      layout: "dashboardLayout.hbs",
      data: data,
    });
  });
};

const postBlog = async (req, res) => {
  try {
    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ status: "error", message: "Missing File" });
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.image;
    let random = new Date().valueOf();
    let filePath = "uploads/" + random + "_" + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv("public/" + filePath, function (err) {});

    const newBlog = new Post({
      ...req.body,
      image: filePath,
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

const updateBlog = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({
      message: "Blog Successfully Updated",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        message: "Blog Not Found",
        success: false,
      });
    }
    return res.status(204).json({
      message: "Blog Successfully deleted",
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
  getBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getAddBlog,
  postBlog,
  getBlogList,
};
