const app = require( './app' )


const PORT = process.env.PORT

app.listen( PORT || 5000, ( req, res ) => {
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
})