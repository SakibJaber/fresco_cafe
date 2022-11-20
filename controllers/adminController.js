

const getAdmin = (req, res) => {
  res.render("dashboard/dashboardHome", { layout: "dashboardLayout.hbs" });
};



module.exports = {
  getAdmin,
  
};
