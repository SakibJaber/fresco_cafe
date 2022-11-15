const getContact = (req, res) => {
  res.render("frontend/contact", {layout: 'main.hbs'});
};;

const postContact = (req, res) => {};

module.exports = {
    getContact,
    postContact
};
