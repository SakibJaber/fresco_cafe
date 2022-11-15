const mongoose = require( 'mongoose' );

const ReservationSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    
    phone: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,
    },
    bookingTime: {
        type:Date,
        required:true
    },
},
    {timestamps: true}
);

module.exports = mongoose.model( 'Reservation', ReservationSchema );
