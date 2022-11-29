const mongoose = require( 'mongoose' );

const ChefSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    designation: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    }
},
    {timestamps: true}
);

module.exports = mongoose.model( 'Chef', ChefSchema );
