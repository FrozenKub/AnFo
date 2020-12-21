import React, {useRef, useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import styled from 'styled-components';
import {store} from "./index";
import {addPost, loginingAction} from "./actions";

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 30vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;


const LoginPasswordInput = styled.input`
font-size: 10pt;
color: #c5e5ef;
`;



const LargerA = styled.a`
font-size: 14pt;
`;








class loginClass extends React.Component{
    constructor(props) {
        super(props);

        this.state =
            {
                username: "",
                password: ""
            }
    }



    handleSubmit(e)
    {
        store.dispatch(loginingAction(this.state))
    }


    render() {

        return (

            <div className="login-page">

                <UpperCorner>
                    <LargerA>
                        <Link to="/">Home</Link>
                    </LargerA>
                </UpperCorner>

                <div className="centered">
                    <div className="login-block">

                        <img src="/AnFoLogo.png" className="logo"/>

                        <div className="login">
                            <div>
                                <LoginPasswordInput type="text" onChange={e=>{this.setState({username: e.target.value})}} name="username" placeholder="AnFo ID"/>
                            </div>

                            <div>
                                <LoginPasswordInput type="password" onChange={e=>{this.setState({password: e.target.value})}} name="password" placeholder="Password"/>
                            </div>

                        </div>

                        <div>
                            <input type="submit" onClick={e=>{e.preventDefault(); this.handleSubmit(e)} } className="loginbutton" value="AUTHORIZE"/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default loginClass;