import React from "react";
import {Link} from "react-router-dom";



const userId = "CR34T0R";

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            title: "HEY THERE!",
            content: "HERE IS CONTENT, YOU KNOW"
        }
    }



    handleLogout(e)
    {

        alert("YOU ARE LOGGED OUT!")

        fetch('/api/user/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.data)
        }).then(response => { response.json().then(data => { console.log(data) }) });

    }

    render() {
        return (
            <div>

                <div className="profBlock">

                </div>

                <div class="profile">
                    <h3>Total Posts: 123</h3>
                    <h3>Total Comments: 587</h3>
                    <h3>Total AnLi: 332</h3>
                    <Link onClick={e => {
                        e.preventDefault()
                        this.handleLogout(e)}}>LogOut</Link>
                </div>

                <div className="profile-pic">
                    <h2>ID: <span class={this.props.login}>@{this.props.login}</span></h2>
                    <img src="/AF_Logo_1-01.png" width="20%" alt="Hi"/>

                </div>
            </div>
        );
    }
}

export default Profile;