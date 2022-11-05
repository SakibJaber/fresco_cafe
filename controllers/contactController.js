const getContact = (req, res) => {
  res.render("contact", {
    name: "contact",
  });
};

const postContact = (req, res) => {};

module.exports = {
    getContact,
    postContact
};
