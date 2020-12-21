let nextPostId = 0
export const addPost = value => ({
    type: 'ADD_POST',
    id: nextPostId++,
    name: value.name,
    title: value.title,
    content: value.content
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const togglePost = id => ({
    type: 'TOGGLE_POST',
    id
})
