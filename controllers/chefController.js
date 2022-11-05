const getChef = (req, res) => {
  res.render("chef", {
    name: "chef",
  });
};

const postChef = (req, res) => {};
const updateChef = (req, res) => {};
const deleteChef = (req, res) => {};

module.exports = {
    getChef,
    postChef,
    updateChef,
    deleteChef
};
