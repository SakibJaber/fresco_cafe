const Menu = require("../models/menuModel");

const getMenu = (req, res) => {
  res.render("frontend/menu", { layout: "main.hbs" });
};

const getAddMenu = (req, res) => {
  res.render("dashboard/addMenu", { layout: "dashboardLayout.hbs" });
};

const getMenuList = ( req, res ) => {
  Menu.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        title: el.title,
        description: el.description,
        image: el.image,
        category: el.category,
        price: el.price,
      });
    });
    res.render("dashboard/menuList", {
      title: "Chef",
      layout: "dashboardLayout.hbs",
      data: data,
    });
  });
  
};

const postMenu = async (req, res) => {
  try {
    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ status: "error", message: "Missing File" });
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.image;
    let random = new Date().valueOf();
    let filePath = "uploads/" + random + "_" + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv("public/" + filePath, function (err) {});

    const newMenu = new Menu({
      ...req.body,
      image: filePath,
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

const deleteMenu = async (req, res) => {
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
