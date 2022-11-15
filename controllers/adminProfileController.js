const getAdminProfile = (req, res) => {
  res.render("dashboard/adminProfile", { layout: "dashboardLayout.hbs" });
};

module.exports = {
  getAdminProfile,
};
