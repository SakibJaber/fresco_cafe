
const homeControll=( req, res ) => {
    res.render("frontend/index", {layout: 'main.hbs'});
  };
module.exports = {
    homeControll
}