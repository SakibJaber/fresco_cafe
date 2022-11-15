const getBlog = (req, res) => {
  res.render("frontend/blog", { layout: "main.hbs" });
};

const getSingleBlog = (req, res) => {
  res.render("frontend/blog-single", { layout: "main.hbs" });
};

const getAllBlog = (req, res) => {};

const postBlog = (req, res) => {};
const updateBlog = (req, res) => {};
const deleteBlog = (req, res) => {};

module.exports = {
  getBlog,
  getAllBlog,
  getSingleBlog,
  postBlog,
  updateBlog,
  deleteBlog,
};
