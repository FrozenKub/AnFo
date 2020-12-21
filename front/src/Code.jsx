import React from "react";


import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
} from "react-router-dom";

import styled from 'styled-components';

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 20vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const RedeemingCode = styled.input`
    font-size: 13pt;
  text-transform: none;
    
`;

const LargerA = styled.a`
font-size: 14pt;
`;

const TrueCode = "AnonymousMeansSecure";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: ""}
    }


    handleSubmit(props) {
        console.log(props)
        if (props == TrueCode)
        {
            alert('We accepted your code: ' + this.state.code + '\nWelocme to the AnFo.');
        }
        else alert('Wrong code, bruh')
    }

    render() {
        return (

            <div className="login-page">

                <UpperCorner>
                    <LargerA>
                        <Link to="/">Home</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/login">Login</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/auth">Apply for Authorization</Link>
                    </LargerA>
                </UpperCorner>

                <img src="/AnFoLogo.png" className="logo"/>

                <div className="login">
                    <div>
                        <RedeemingCode type="text" onChange={e=>{this.setState({code: e.target.value})}} name="code" placeholder="ENTER YOUR CODE"/>
                    </div>

                </div>

                <div><input type="submit" onClick={e=>{e.preventDefault(); this.handleSubmit(this.state.code)} } className="loginbutton" value="REDEEM"/></div>
            </div>

        );
    }
}


export default Code;