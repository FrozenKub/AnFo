import React from "react";
import styled from 'styled-components';



const LoginPasswordInput = styled.input`
font-size: 10pt;
color: #c5e5ef;
`;


class PostCreation extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name: "0",
            title: "HEY THERE!",
            content: "HERE IS CONTENT, YOU KNOW"}
    }


    render()
    {
        return (
            <div className="centered">
                <div className="login-block">
                    <div className="login">
                        <div>
                            <LoginPasswordInput type="text" onChange={e=>{this.setState({title: e.target.value})}} name="title" placeholder="Title"/>
                        </div>

                        <div>
                            <LoginPasswordInput type="password" onChange={e=>{this.setState({content: e.target.value})}} name="content" placeholder="Content"/>
                        </div>

                    </div>

                    <div>
                        <input type="submit" onClick={e=>{e.preventDefault(); alert(JSON.stringify(this.state))} } className="loginbutton" value="AUTHORIZE"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostCreation;