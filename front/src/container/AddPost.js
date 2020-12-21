import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

import { store } from '../index'

let value = {
    name: "",
    title: "",
    content: ""
}

const AddPost = () => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    store.dispatch(addPost(value))
                }}
            >
                <input type="name" onChange={e=>(value.name = e.target.value)} placeholder="Name"/>
                <input type="title"  onChange={e=>(value.title = e.target.value)} placeholder="Title"/>
                <input type="content" onChange={e=>(value.content = e.target.value)} placeholder="Content"/>
                <button type="submit" >Add Post</button>
            </form>
        </div>
    )
}

export default connect()(AddPost)