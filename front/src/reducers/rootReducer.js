import {store} from "../index";

let nextPostId = 0

let message = "";

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
            break;

        case "ALERT_LOGIN":

            alert("Welcome back!")
            break;


        case "REGISTER":

            fetch('api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(action.regInfo)
            }).then(response => { response.json().then(data => {
                if (data.message=="OK")
            {
                alert("You are now registered!")
            }
                else alert("User with this name already exists. \nTry another one.")
            }) });

            break;

        case "ALERT_REGISTER":
                alert("Attempting to create user!");
            break;

    }
    return state
}