const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    title: action.title,
                    content: action.content,
                    completed: false
                }
            ]
        case 'TOGGLE_POSTS':
            return state.map(post =>
                post.id === action.id ? { ...post, completed: !post.completed } : post
            )
        default:
            return state
    }
}

export default posts