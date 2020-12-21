import React, {useRef, useEffect} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import App from "./App.jsx"
import Spoty from "./Spotify.jsx"
import Profile from "./Profile.jsx"
import StickyUp from "./Sticky.jsx"
import Login from "./Login.jsx"
import Code from "./Code.jsx"
import Auth from "./Auth.jsx"
import Register from "./Register.jsx"
import { SnackbarProvider } from 'notistack';


import Navbar from "./components/Navbar";


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state=
            {
                login: ""
            }
    }


    handleSubmit(e)
    {
        fetch('/api/users/name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { this.setState({login: data.login})}) });

    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">

                            <div className="centered">
                                <img src="/AnFoLogo.png" className="logo"/>
                                <a>
                                    <Link to="/redux">Redux</Link>
                                </a>
                                <a>
                                    <Link to="/auth">Auth</Link>
                                </a>
                                <a>
                                    <Link to="/login">Login</Link>
                                </a>
                                <a>
                                    <Link to="/register">Register</Link>
                                </a>
                                <a onClick={e=>{e.preventDefault(); this.handleSubmit(e)} }>
                                    <Link to="/main">Main</Link>
                                </a>
                            </div>

                        </Route>


                        <Route exact path="/redux">
                            <div>
                                <Navbar/>
                            </div>
                        </Route>

                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/auth">
                            <Auth/>
                        </Route>
                        <Route exact path="/code">
                            <Code/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/main">
                            <>
                                <SnackbarProvider
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}>
                                    <App login={this.state.login}/>
                                </SnackbarProvider>
                                <Spoty/>
                                <Profile login={this.state.login}/>
                                <StickyUp/>
                            </>
                        </Route>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main

function Home() {
}
