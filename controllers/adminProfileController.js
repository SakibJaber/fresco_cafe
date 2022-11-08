const getAdminProfile = (req, res) => {
  res.render("adminProfile", { layout: "dashboardLayout.hbs" });
};

module.exports = {
  getAdminProfile,
};
