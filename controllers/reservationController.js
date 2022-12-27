const Reservation = require("../models/reservationModel");

const getReservation = (req, res) => {
  res.render("frontend/reservation", { layout: "main.hbs" });
};

const getReservationList = (req, res) => {
  Reservation.find((err, docs) => {
    if (err) {
      return res.json({ error: "something went wrong" });
    }
    let data = [];
    docs.forEach((el) => {
      data.push({
        name: el.name,
        email: el.email,
        phone: el.phone,
        bookingDate: el.bookingDate,
        bookingTime: el.bookingTime,
        guest:el.guest,
        id: el._id,
      });
    } );
    res.render("dashboard/reservationList", {
      title: "Blog",
      layout: "dashboardLayout.hbs",
      data: data,
    });
  });
};

const postReservation = async (req, res) => {
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
};


const deleteReservation = async (req, res) => {
  Reservation.findByIdAndRemove(req.params.id, (err, blog) => {
    if (err) {
      res.render("error", { errorStatus: 500 });
    }
    // /delete file
    try {
      fs.unlink("public/" + blog.image, () => {
        console.log("File deleted");
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
    res.redirect("/admin/reservations");
  });
};

module.exports = {
  getReservation,
  postReservation,
  getReservationList,
  deleteReservation
};
