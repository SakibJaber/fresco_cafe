const Contact = require("../models/contactModel");


const getContact = (req, res) => {
  res.render("frontend/contact", { layout: "main.hbs" });
};

const getContactList = (req, res) => {
  Contact.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        name: el.name,
        email: el.email,
        subject: el.subject,
        message: el.message,
        id: el._id,
      });
    });
    res.render("dashboard/contactList", {
      title: "Blog",
      layout: "dashboardLayout.hbs",
      data: data,
    });
  });
};

const postContact = async (req, res) => {
  try {
    const newContact = new Contact({
      ...req.body,
    });
    await newContact.save();
    return res.status(201).json({
      message: "Contact successfully added",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

const deleteContact = async (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err) {
      res.render("error", { errorStatus: 500 });
    }
    // /delete file
   
    res.redirect("/admin/Contacts");
  });
};

module.exports = {
  getContact,
  getContactList,
  postContact,
  deleteContact,
};
