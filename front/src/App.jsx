import React from "react";
import { withSnackbar } from 'notistack';
import styled from 'styled-components';
import Logo from './Logo.jsx';
import {store} from "./index";
import {addPost} from "./actions";
import Profile from "./Profile.jsx";

const Themeh2 = styled.p`
  color: #bddce6;
  margin: 0;
  padding: 0;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px #bddce6;
    background-color: #00080f;
`;

let array = [];

array.push({name: "1512", title: "NNN is over!", content: "Here we go again."})
array.push({name: "225", title: "Winter is cumming.", content: "No, not a mistake."})
array.push({name: "3243", title: "GachiKoff vs. GoodKoff", content: "What do you prefer?"})
array.push({name: "46234", title: "The garden was blessed by the Gods of me and you", content: "The garden was blessed by the Gods of me and you\n" +
        "We headed West to find ourselves some truth, oh\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "We counted all our reasons, excuses that we made\n" +
        "We found ourselves some treasure, and threw it all away\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "Caught in the tide of blossom, caught in the carnival\n" +
        "Your confidence forgotten, and I see the gypsies run\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "When I dance alone, and the Suns's bleeding down\n" +
        "Blame it on me\n" +
        "When I lose control and the veil's overused\n" +
        "Blame it on me\n" +
        "When I dance alone, I know I'll go\n" +
        "Blame it on me oh\n" +
        "When I'll lose control, I know I'll go\n" +
        "Blame it on me oh\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?\n" +
        "What you're waiting for?"})
array.push({name: "51133", title: "DO NOT DO IT!", content: "https://youtu.be/dQw4w9WgXcQ"})
array.push({name: "6332", title: "Try me bitch.", content: "Yes"})


const TitleInput = styled.input`
width: 12vw;
font-size: 10pt;
color: #c5e5ef;
border-radius: 0.1em;
box-shadow: inset 2px 2px 2px rgb(0 0 0), inset -2px -2px 2px rgb(0 0 0 / 50%);
`;

const ContentInput = styled.textarea`
background-color: #00182d;
width: 13vw;
height: 9vh;
border-radius: 0.1em;
font-size: 10pt;
color: #c5e5ef;
font-color: #727170;
box-shadow: inset 1px 1px 1px rgb(0 0 0), inset -1px -1px 1px rgb(0 0 0 / 50%);
`;

const PostSubmit = styled.input`
width: 13vw;
border-radius: 0.1em;
font-size: 10pt;
color: #c5e5ef;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: inset 2px 2px 2px rgb(0 0 0), inset -2px -2px 2px rgb(0 0 0 / 50%);
`;




let userId= "";

let value = {
    name: "",
    title: "",
    content: ""
}
let counter=0;

class App extends React.Component{

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.state = {  name: this.props.login, title: "SHIT ASS TITLE", content: "Don't tell anyone!"}
    }

    componentDidMount() {


        fetch('/api/users/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { userId = data.login})});


        this.setState({name: userId, title: "THERE WILL BE TITLE", content: "THERE WILL BE YOUR CONTENT"})

    }


    handleClick(e)
    {
        e.preventDefault();
    }

    createPost(e) {
        e.preventDefault();


        fetch('/api/users/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { userId = data.login})});

        value.name = userId;

        console.log(store.getState())
        if (userId == undefined)
        {
            this.props.enqueueSnackbar("YOU'RE NOT AUTHORIZED", {
                variant: 'error',
            });
        }
        else if (value.title == "" | value.content == "") {
            this.props.enqueueSnackbar("FILL IN BOTH TITLE AND CONTENT", {
                variant: 'error',
            });
        } else {
            store.dispatch(addPost(value))
            array.push({name: userId, title: store.getState()[counter].title, content: store.getState()[counter].content});
            this.setState({name: userId, title: store.getState()[counter].title, content: store.getState()[counter].content});
            counter++;
            this.props.enqueueSnackbar("POST CREATED", {
                variant: 'success',
            });
        }
    }


    handlePostClick(e)
    {
        e.preventDefault();


        fetch('/api/users/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { userId = data.login})});


        this.setState({name: userId, title: "", content: ""})
        let x = document.getElementById("createPost");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    }

    render()
    {
        return (
            <>
                <Profile name={this.state.name}/>
                <Logo title={this.state.title} name={this.state.name} content={this.state.content}/>
            <div className="flex-container">
                <A>
                    <Button onClick={e=>{this.handlePostClick(e)}} className="theme">
                        <Themeh2 className="mar">CREATE POST</Themeh2>
                    </Button>
                </A>
                <div id="createPost" className="post-create">


                        <TitleInput type="text"  onChange={e=>(value.title = e.target.value)} name="title" placeholder="Title" />

                        <ContentInput type="text" onChange={e=>(value.content = e.target.value)} name="content" placeholder="CONTENT"/>

                        <PostSubmit type="submit" onClick={e => {
                            e.preventDefault()
                            this.createPost(e)
                        }}  value="POST"/>



                </div>

                <A>
                    <button onClick={e=>{this.setState({name: "CR34T0R", title: "H3LL0 W0R1D! W31C0M3 T0 TH3 F0RUM! (READ THIS)", content: "Welcome to the Anonymous Forum. This forum is a place for people to discuss anything you might want to discuss! We have created a few threads to get you started but feel free to start your own! Keep an eye out for red posts from moderators or even green posts from Forum creator himself! When you sign up to the forum, each and every one of you will get your own AnFo ID, which is a number based on when you signed up. You can find your AnFo ID by checking Profile Block on your right. NB: You do not have to post anything to see it. We love seeing all the exciting topics and discussions you have here! Remember to always respect all other AnFo users as we are all in this together! Abuse will not be tolerated and any unacceptable behavior will result in temporary or permanent bans from the AnFo society!"})}} className="theme">
                        <Themeh2 className="mar"><span className="CR34T0R">@CR34T0R</span> - H3LL0 W0R1D! W31C0M3 T0 TH3 F0RUM! (READ THIS)</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: "AnF0_T34m", title: "HELLO! WELOCME!", content: "This is the way you move!"})}} className="theme">
                        <Themeh2 className="mar"><span className="AnF0_T34m">@AnF0_T34m</span> - HELLO! WELOCME!</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-1].name, title: array[array.length-1].title, content: array[array.length-1].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-1].name}>@{array[array.length-1].name}</span> - {array[array.length-1].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-2].name, title: array[array.length-2].title, content: array[array.length-2].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-2].name}>@{array[array.length-2].name}</span> - {array[array.length-2].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-3].name, title: array[array.length-3].title, content: array[array.length-3].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-3].name}>@{array[array.length-3].name}</span> - {array[array.length-3].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-4].name, title: array[array.length-4].title, content: array[array.length-4].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-4].name}>@{array[array.length-4].name}</span> - {array[array.length-4].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-5].name, title: array[array.length-5].title, content: array[array.length-5].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-5].name}>@{array[array.length-5].name}</span> - {array[array.length-5].title}</Themeh2>
                    </button>
                </A>

                <A>
                    <button onClick={e=>{this.setState({name: array[array.length-6].name, title: array[array.length-6].title, content: array[array.length-6].content})}} className="theme">
                        <Themeh2 className="mar"><span className={array[array.length-6].name}>@{array[array.length-6].name}</span> - {array[array.length-6].title}</Themeh2>
                    </button>
                </A>
            </div>

                </>
        );
    }

}

export default  withSnackbar(App);