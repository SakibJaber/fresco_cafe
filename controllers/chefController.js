const Chef = require("../models/chefModel");

const getChef = (req, res) => {
  res.render("frontend/chef", { layout: "main.hbs" });
};

const getAddChef = (req, res) => {
  res.render("dashboard/addChef", { layout: "dashboardLayout.hbs" });
};
const getChefList = ( req, res ) => {
  res.render("dashboard/chefList", { layout: "dashboardLayout.hbs" });
};

const postChef = async (req, res) => {
  try {
    const newChef = new Chef({
      ...req.body,
    });
    await newChef.save();
    return res.status(201).json({
      message: "Chef successfully Created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
const updateChef = (req, res) => {};
const deleteChef = (req, res) => {};

module.exports = {
  getChef,
  getAddChef,
  getChefList,
  postChef,
  updateChef,
  deleteChef,
};
