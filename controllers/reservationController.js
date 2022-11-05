const getReservation= (req, res) => {
    res.render("reservation", {
      name: "Reservation",
    });
  };
  
  
  module.exports = {
    getReservation,
    
  };
  