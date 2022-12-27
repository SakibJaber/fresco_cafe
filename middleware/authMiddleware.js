const User = require( '../models/userModel' );

exports.bindUserWithRequest = () => {
    return async ( req, res, next ) => {
        if ( !req.session.isLoggedIn ) {
            return next();
        }
        try {
            let user = await User.findById( req.session.user._id );
            req.user = user;
            next();
        } catch ( error ) {
            console.log( error );
            next( error );
        }
    };
};

exports.isAuthenticated = ( req, res, next ) => {
    if ( !req.session.isLoggedIn ) {
        return res.redirect( '/login' );
    }
    next()
};

exports.isUnAuthenticated = ( req, res, next ) => {
    if ( req.session.isLoggedIn ) {
        return res.redirect( '/admin' );
    }
    next();
};