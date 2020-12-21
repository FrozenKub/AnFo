import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import styled from 'styled-components';

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 30vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;


const LoginPasswordInput = styled.input`
font-size: 10pt;
color: #c5e5ef;
`;



const LargerA = styled.a`
font-size: 14pt;
`;

class registerClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""}
    }

    handleSubmit(e)
    {
        console.log(JSON.stringify(this.state))
        fetch('api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { console.log(data) }) });
    }


    render() {
        return (

            <div className="login-page">


                <UpperCorner>
                    <LargerA>
                        <Link to="/">Home</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/auth">Apply for Authorization</Link>
                    </LargerA>
                    <LargerA>
                        <Link to="/code">Redeem Code</Link>
                    </LargerA>
                </UpperCorner>

                <img src="/AnFoLogo.png" className="logo"/>

                <div className="login">
                    <div>
                        <LoginPasswordInput type="text" onChange={e=>{this.setState({username: e.target.value})}} name="login" placeholder="login"/>
                    </div>

                    <div>
                        <LoginPasswordInput type="password" onChange={e=>{this.setState({password: e.target.value})}} name="password" placeholder="Password"/>
                    </div>

                </div>

                <div><input type="submit" onClick={e=>{e.preventDefault(); this.handleSubmit(e)} } className="loginbutton" value="REGISTER"/></div>
            </div>

        );
    }
}


export default registerClass;