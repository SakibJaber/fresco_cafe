const Menu = require("../models/menuModel");

const getMenu = (req, res) => {
  res.render("frontend/menu", { layout: "main.hbs" });
};

const getAddMenu = (req, res) => {
  res.render("dashboard/addMenu", { layout: "dashboardLayout.hbs" });
};

const getMenuList = (req, res) => {
  res.render("dashboard/menuList", { layout: "dashboardLayout.hbs" });
};

const postMenu = async (req, res) => {
  try {
    const newMenu = new Menu({
      ...req.body,
    });
    await newMenu.save();
    return res.status(201).json({
      message: "Menu successfully Created",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const updateMenu = (req, res) => {};
const deleteMenu = (req, res) => {};

module.exports = {
  getMenu,
  postMenu,
  updateMenu,
  deleteMenu,
  getAddMenu,
  getMenuList,
};
