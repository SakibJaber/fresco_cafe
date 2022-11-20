const Reservation = require( "../models/reservationModel" );

const getReservation = ( req, res ) => {
  res.render("frontend/reservation", {layout: 'main.hbs'});
};

const postReservation = async( req, res ) => {
  try {
    const newReservation = new Reservation({
      ...req.body,
    });
    await newReservation.save();
    return res.status(201).json({
      message: "Reservation successfully added",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
}
  
  
  module.exports = {
    getReservation,
    postReservation,

    
  };
  