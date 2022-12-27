const Menu = require("../models/menuModel");
const fs = require("fs");

const getMenu = (req, res) => {
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
    res.render("frontend/menu", {
      title: "Menu",
      category:'BREAKFAST',
      layout: "main.hbs",
      data: data,
    });
  });
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
        id:el._id
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

const editMenu = async (req, res) => {
  Menu.findById(req.params.id).then((menu) => {
   
    const details = {
      title: menu.title,
      id: menu._id,
      description: menu.description,
      category: menu.category,
      price: menu.price,
      image: menu.image,
    };

    res.render("dashboard/updateMenu", {
      title: "Update Menu",
      layout: "dashboardLayout.hbs",
      menu: details,
    });
  });
};

const updateMenu = async (req, res) => {
  try {
    let sampleFile;
    if (!req.files || Object.keys(req.files).length === 0) {
      req.toastr.warning("Missing file");
      res.redirect("/admin/blog/" + req.params.id + "/edit");
    }
    sampleFile = req.files.image;
    let random = new Date().valueOf();
    let filePath = "uploads/" + random + "_" + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv("public/" + filePath, function (err) {});

    const menuObj = {
      ...req.body
    };

    if (filePath) {
      menuObj.image = filePath;
    }

    Menu.findByIdAndUpdate(req.params.id, menuObj, (err, menu) => {
      if (err) {
        req.toastr.error("Error.");
        res.redirect("/admin/menu/" + req.params.id + "/edit");
      }
      req.toastr.success("Successfully Updated");
      res.redirect("/admin/menus");
    });
  } catch (err) {
    req.toastr.error("Something went Wrong");
    res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
  }
};

const deleteMenu = async (req, res) => {
  Menu.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err) {
      res.render("error", { errorStatus: 500 });
    }
    // /delete file
    try {
      fs.unlink("public/" + blog.image, () => {
        console.log("File deleted");
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
    res.redirect("/admin/menus");
  });
};

module.exports = {
  getMenu,
  postMenu,
  editMenu,
  updateMenu,
  deleteMenu,
  getAddMenu,
  getMenuList,
};
