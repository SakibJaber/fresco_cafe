const getMenu = (req, res) => {
  res.render("menu", {
    name: "menu",
  });
};

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
