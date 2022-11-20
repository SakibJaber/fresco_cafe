const Menu = require("../models/menuModel");

const getAddMenu = ( req, res ) => {
    res.render("dashboard/addMenu", { layout: "dashboardLayout.hbs" });
  };
  
  const postAddMenu = async (req, res) => {
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
  
  const getMenuList = (req, res) => {
    res.render("dashboard/menuList", { layout: "dashboardLayout.hbs" });
};
  

module.exports = {
    getAddMenu,
    postAddMenu,
    getMenuList,
  };
  