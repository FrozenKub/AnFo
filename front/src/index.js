import React from "react";
import ReactDOM from "react-dom";
import 'regenerator-runtime/runtime'
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from "redux-saga"
import {watchPost} from "./saga/saga";

const sagaMiddleware = createSagaMiddleware()

import Main from "./Main.jsx"
import './styles/style.css'


export const store = createStore(rootReducer, [],  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchPost)

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root"));
