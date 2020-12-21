import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({ onClick, completed, name, title, content }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {name}
        {title}
        {content}
    </li>
)

Posts.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Posts