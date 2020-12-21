import {store} from "../index";

let nextPostId = 0


const initialState = {
    type: '',
    id: 0,
    name: '',
    title: '',
    content: '',

};

export default function rootReducer(state = initialState, action )
{
    switch (action.type)
    {
        case "ADD_POST":
        console.log("rootReducer")
            state.push({
                type: 'ADD_POST',
                id: nextPostId++,
                name: action.name,
                title: action.title,
                content: action.content
            })
            break;


        case "ALERT_POST":
            alert("rootReducer")
            state.push({
                type: 'ALERT_POST',
                id: nextPostId,
                name: action.name,
                title: action.title,
                content: action.content
            })
            break;
    }
    return state
}