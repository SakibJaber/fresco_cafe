const getReservation= (req, res) => {
  res.render("frontend/reservation", {layout: 'main.hbs'});
};;
  
  
  module.exports = {
    getReservation,
    
  };
  