import React from "react";


class Logo extends React.Component{

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
        <>
        <div className="block-right-name">
            <h1 className="marName"><span className={this.props.name}>@{this.props.name} </span> - {this.props.title}</h1>
        </div>
        <div className="block-right">
            <p className="rightbcontent">
                {this.props.content}
            </p>
        </div>
            </>
    );
}
}

export default Logo;