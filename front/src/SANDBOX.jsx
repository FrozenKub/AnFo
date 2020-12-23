import React from "react";

let pos;

let dec = 0;

class SANDBOX extends React.Component{

    constructor(props) {
        super(props);


        this.gValue = "";

        this.numbers =
            {
                id: "1"
            }

        this.state = {
            id: "",
            name: "4",
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

   async handleClick(e)
    {
        e.preventDefault()

        let data = await fetch('/api/post/id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.numbers)
        })

        return data.json();
    }

    async handleBestClick(e)
    {
        e.preventDefault();

        let data = await fetch('/api/post/count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

        return data.json();
    }

    render()
    {
    return (
        <div className="centered">

            <button onClick={async e => {

                let cou = await this.handleBestClick(e)
                let couJs = await JSON.stringify(cou.count);
                this.numbers.id = couJs-1;

                let pos = await this.handleClick(e)
                let posJs = await JSON.stringify(pos.content);

                    console.log("cou: " + couJs)
                    console.log("pos: " + posJs)


            }}>Show Post</button>

        </div>
    );
}
}

export default SANDBOX;