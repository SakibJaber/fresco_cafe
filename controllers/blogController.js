const getBlog=( req, res ) => {
    res.render( 'blog', {
        'name':'Blog'
    })
}

const getAllBlog = ( req, res ) => {
    
}

const postBlog = ( req, res ) => {
    
} 
const updateBlog = ( req, res ) => {
    
} 
const deleteBlog = ( req, res ) => {
    
} 

module.exports = {
    getBlog,
    getAllBlog,
    postBlog,
    updateBlog,
    deleteBlog
}