let nextPostId = 0
export const addPost = value => ({
    type: 'ADD_POST',
    id: nextPostId++,
    name: value.name,
    title: value.title,
    content: value.content
})

export const loginingAction = value => ({
    type: 'LOGGING',
    logInfo: value
})


export const regAction = value => ({
    type: 'REGISTER',
    regInfo: value
})