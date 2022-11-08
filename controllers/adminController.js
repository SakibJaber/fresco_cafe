const getAdmin = (req, res) => {
  res.render("dashboardHome", {layout: 'dashboardLayout.hbs'});
};

module.exports = {
  getAdmin,
};
