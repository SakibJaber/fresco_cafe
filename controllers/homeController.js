
const homeControll=( req, res ) => {
    res.render( 'index', {
        'name':'World'
    })
} 

module.exports = {
    homeControll
}