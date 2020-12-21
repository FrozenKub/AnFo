import { combineReducers } from 'redux'
import posts from './posts.js'
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    posts
})