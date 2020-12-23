import React from "react";


class SANDBOX extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            name: "3",
            title: "CHANGED",
            content: "Yes"
        }
    }


    handleNewClick(e)
    {
        e.preventDefault()
        alert("handleClick Clicked");


        fetch('/api/post/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { }) });

    }

    handleClick(e)
    {
        console.log(this.state.id)

        e.preventDefault()
        alert("handleClick Clicked");


        fetch('/api/post/id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { alert(JSON.stringify(data)) }) });

    }



    handleBestClick(e)
    {

        e.preventDefault()


        fetch('/api/post/count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.state)
        }).then(response => { response.json().then(data => { alert(JSON.stringify(data.count)) }) });

    }


    render()
    {
    return (
        <div className="centered">
            <button onClick={e => {
                this.setState({id: 21})
                this.handleClick(e)
            }}>Find Post</button>


            <button onClick={e => {
                this.handleNewClick(e)
            }}>Create Post</button>


            <button onClick={e => {
                this.handleBestClick(e)
            }}>Count Posts</button>
        </div>
    );
}
}

export default SANDBOX;