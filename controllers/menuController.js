const getMenu = (req, res) => {
  res.render("frontend/menu", {layout: 'main.hbs'});
};;

const postMenu = ( req, res ) => {
  
};
const updateMenu = (req, res) => {};
const deleteMenu = (req, res) => {};

module.exports = {
  getMenu,
  postMenu,
  updateMenu,
  deleteMenu,
};
