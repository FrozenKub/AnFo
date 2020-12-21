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
            alert("Post was Created!")
            break;



        case "LOGGING":

            fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(action.logInfo)
            }).then(response => { response.json().then(data => { console.log(data) }) });


            state.push({
                type: 'LOGGING',
                logInfo: action.logInfo
            })

            break;

        case "ALERT_LOGIN":

            alert("Saga worked")
            break;

    }
    return state
}