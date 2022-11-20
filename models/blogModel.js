const mongoose = require( 'mongoose' );

const PostSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    slug: {
        type:String
    }
   
},
    {timestamps: true}
);

module.exports = mongoose.model( 'Post', PostSchema );
