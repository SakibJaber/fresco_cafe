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

const updateMenu = async (req, res) => {
	try {
		await Menu.findByIdAndUpdate(req.params.id, req.body);
		return res.status(201).json({
			message: "Menu Successfully Updated",
			success: true,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
			success: false,
		});
	}
};


const deleteMenu = async ( req, res ) => {
	try {
		const deleted = await Menu.findByIdAndDelete(req.params.id);
		if (!deleted) {
			return res.status(404).json({
				message: "Menu Not Found",
				success: false,
			});
		}
		return res.status(204).json({
			message: "Menu Successfully deleted",
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
  getMenu,
  postMenu,
  updateMenu,
  deleteMenu,
  getAddMenu,
  getMenuList,
};
