const getBlog=( req, res ) => {
    res.render( 'blog', {
        'name':'Blog'
    })
}
const getSingleBlog = ( req, res ) => {
    res.render( 'blog-single', {
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
    getSingleBlog,
    postBlog,
    updateBlog,
    deleteBlog
}