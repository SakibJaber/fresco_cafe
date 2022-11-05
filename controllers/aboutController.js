const getAbout=( req, res ) => {
    res.render( 'about', {
        'name':'About'
    })
} 



module.exports = {
    getAbout
}