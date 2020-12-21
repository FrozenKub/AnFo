import React from "react";
import {Link} from "react-router-dom";


import styled from 'styled-components';

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 5vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
`;

const DivMenu = styled.div`
position: absolute;
width: 100vw;
height: 100vh;

`;


const LargerA = styled.a`
font-size: 14pt;
`;


class StickyUp extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <>
                <div class="block-stiky">
                    <img src="/AnFoLogo.png" width="5%" alt="Hi"/>
                </div>
                <UpperCorner>
                    <LargerA>
                        <Link to="/">Home</Link>
                    </LargerA>
                </UpperCorner>
            </>
        );
    }
}

export default StickyUp;