import React from 'react'
import { store } from '../index'

const Footer = () => (
    <div className="centered">
        <span>Show: </span>
        <button  onClick={()=>{console.log(store.getState())}}>All</button>
    </div>
)

export default Footer