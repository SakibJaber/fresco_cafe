const Chef = require("../models/chefModel");

const getChef = (req, res) => {
  Chef.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        name: el.name,
        designation: el.designation,
        image: el.image,
        about: el.about,
      });
    });
    res.render("frontend/chef", {
      title: "Blog",
      layout: "main.hbs",
      data: data,
    });
  });
  
};

const getAddChef = (req, res) => {
  res.render("dashboard/addChef", { layout: "dashboardLayout.hbs" });
};
const getChefList = (req, res) => {
  Chef.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        name: el.name,
        designation: el.designation,
        image: el.image,
        about: el.about,
      });
    });
    res.render("dashboard/chefList", {
      title: "Chef",
      layout: "dashboardLayout.hbs",
      data: data,
    });
  });
};

const postChef = async (req, res) => {
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
    const newChef = new Chef({
      ...req.body,
      image: filePath,
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

const updateChef = async (req, res) => {
  try {
    await Chef.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({
      message: "Chef Successfully Updated",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const deleteChef = async (req, res) => {
  try {
    const deleted = await Chef.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        message: "Chef Not Found",
        success: false,
      });
    }
    return res.status(204).json({
      message: "Chef Successfully deleted",
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
  getChef,
  getAddChef,
  getChefList,
  postChef,
  updateChef,
  deleteChef,
};
