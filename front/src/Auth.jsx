import React from "react";
import emailjs from 'emailjs-com';

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
    width: 20vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;


//noistack

const EmailInput = styled.input`
font-size: 10pt;
color: #c5e5ef;
`;


const LargerA = styled.a`
font-size: 14pt;
`;

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("gmail","template_mv7eeiy", e.target, 'user_ScTodztvA8pgfTzqzTyWB')
            .then((result) => {
                console.log(result.text);
                alert("Check your inbox.");
            }, (error) => {
                console.log(error.text);
            });
    }

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
                    <Link to="/code">Redeem Code</Link>
                </LargerA>
            </UpperCorner>

            <img src="/AnFoLogo.png" className="logo"/>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="login">
                    <div>
                <EmailInput type="email" name="email" placeholder="EMAIL"/>
                        <input type="submit" value="Send" className="loginbutton"/>
                    </div>

                </div>
            </form>
        </div>
    );
}