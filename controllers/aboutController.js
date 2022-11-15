const getAbout=( req, res ) => {
    res.render("frontend/about", {layout: 'main.hbs'});
  };



module.exports = {
    getAbout
}