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


const deleteBlog = async ( req, res ) => {
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
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getAddBlog,
  postBlog,
  getBlogList
};
