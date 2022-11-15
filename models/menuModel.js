const mongoose = require( 'mongoose' );

const ChefSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    photo: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
},
    {timestamps: true}
);

module.exports = mongoose.model( 'Chef', ChefSchema );
