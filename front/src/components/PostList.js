import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostList = ({ posts, togglePost }) => (
    <ul>
        {posts.map(post => (
            <Post key={post.id} {...post} onClick={() => togglePost(post.id)} />
        ))}
    </ul>
)

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    togglePost: PropTypes.func.isRequired
}

export default PostList