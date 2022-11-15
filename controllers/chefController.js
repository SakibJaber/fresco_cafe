const getChef = (req, res) => {
  res.render("frontend/chef", {layout: 'main.hbs'});
};;

const postChef = (req, res) => {};
const updateChef = (req, res) => {};
const deleteChef = (req, res) => {};

module.exports = {
    getChef,
    postChef,
    updateChef,
    deleteChef
};
