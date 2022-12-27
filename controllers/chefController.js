const Chef = require("../models/chefModel");
const fs = require("fs");

const getChef = (req, res) => {
  Chef.find((err, docs) => {
    if (err) {
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
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
        id: el._id,
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
      req.toastr.warning("Missing file");
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
    req.toastr.success("Successfully Created Chef");
    return res.redirect("/admin/chefs");
  } catch (err) {
    req.toastr.error("Something went Wrong");
    res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
  }
};

const editChef = async (req, res) => {
  Chef.findById(req.params.id).then((chef) => {
   
    const details = {
      name: chef.name,
      id: chef._id,
      designation: chef.designation,
      about: chef.about,
      image: chef.image,
    };

    res.render("dashboard/updateChef", {
      title: "Update Chef",
      layout: "dashboardLayout.hbs",
      chef: details,
    });
  });
};

const updateChef = async (req, res) => {
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

    const chefObj = {
      name: req.body.name,
      designation: req.body.designation,
      about: req.body.about,
    };

    if (filePath) {
      chefObj.image = filePath;
    }

    Chef.findByIdAndUpdate(req.params.id, chefObj, (err, chef) => {
      if (err) {
        req.toastr.error("Error.");
        res.redirect("/admin/chef/" + req.params.id + "/edit");
      }
      req.toastr.success("Successfully Updated");
      res.redirect("/admin/chefs");
    });
  } catch (err) {
    req.toastr.error("Something went Wrong");
    res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
  }
};

const deleteChef = async (req, res) => {
  Chef.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err) {
      res.render("error", { errorStatus: 500 });
    }
    // /delete file
    try {
      fs.unlink("public/" + blog.image, () => {
        console.log("File deleted");
      });
    } catch (error) {
      req.toastr.error("Something went Wrong");
      res.render("dashboard/error500", { layout: "dashboardLayout.hbs" });
    }
    res.redirect("/admin/chefs");
  });
};

module.exports = {
  getChef,
  getAddChef,
  getChefList,
  postChef,
  editChef,
  updateChef,
  deleteChef,
};
