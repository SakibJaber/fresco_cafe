const Post = require("../models/blogModel");
const fs = require("fs");

const getBlog = (req, res) => {
  Post.find((err, docs) => {
    if (err) {
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
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
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
    });
};

const getAddBlog = (req, res) => {
  res.render("dashboard/addBlog", { layout: "dashboardLayout.hbs" });
};

const getBlogList = (req, res) => {
  Post.find((err, docs) => {
    if (err) {
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        title: el.title,
        description: el.description,
        image: el.image,
        id: el._id,
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
      req.toastr.warning("Missing file");
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
    req.toastr.success("Successfully Created Blog");
    return res.redirect("/admin/blogs");
  } catch (err) {
    req.toastr.error("Something went Wrong");
    res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
  }
};

const editBlog = async (req, res) => {
  Post.findById(req.params.id).then((blog) => {
    // blog list
    const details = {
      title: blog.title,
      id: blog._id,
      description: blog.description,
      image: blog.image,
    };
    // console.log(details);
    res.render("dashboard/updateBlog", {
      title: "Update Blog",
      layout: "dashboardLayout.hbs",
      blog: details,
    });
  });
};

const updateBlog = async (req, res) => {
  try {
    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
      req.toastr.warning("Missing file");
      res.redirect("/admin/blog/" + req.params.id + "/edit");
    }
    sampleFile = req.files.image;
    let random = new Date().valueOf();
    let filePath = "uploads/" + random + "_" + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv("public/" + filePath, function (err) {});

    const blogObj = {
      title: req.body.title,
      description: req.body.description,
    };

    if (filePath) {
      blogObj.image = filePath;
    }

    Post.findByIdAndUpdate(req.params.id, blogObj, (err, blog) => {
      if (err) {
        req.toastr.error("Error.");
        res.redirect("/admin/blog/" + req.params.id + "/edit");
      }
      req.toastr.success("Successfully Updated");
      res.redirect("/admin/blogs");
    });
  } catch (err) {
    req.toastr.error("Invalid credentials.");
    res.render("dashboard/error500");
  }
};

const deleteBlog = async (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err) {
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
    }
    // /delete file
    try {
      fs.unlink("public/" + blog.image, () => {});
    } catch (error) {
      res.render("dashboard/error500");
    }
    req.toastr.warning("Blog Delete");
    res.redirect("/admin/blogs");
  });
};

module.exports = {
  getBlog,
  getSingleBlog,
  editBlog,
  updateBlog,
  deleteBlog,
  getAddBlog,
  postBlog,
  getBlogList,
};
