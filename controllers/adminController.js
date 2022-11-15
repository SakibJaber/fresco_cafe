
const getAdmin = ( req, res ) => {
  res.render("dashboard/dashboardHome", { layout: "dashboardLayout.hbs" });
};

const getCreateBlog = (req, res) => {
  res.render("dashboard/createPost", { layout: "dashboardLayout.hbs" });
};
const createBlog = ( req, res ) => {
  res.render("dashboard/createPost", { layout: "dashboardLayout.hbs" });
};

module.exports = {
  getAdmin,
  getCreateBlog,
  createBlog
};
