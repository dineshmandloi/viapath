import React from "react";
import './img.scss';

const Img = (props) =>{
    return(
        <>
            <img src={props.srcPath} alt="img"/>
        </>
    )
}


Text.defaultProps = {
    text:"Lorem ipsum",
    textType:'p'
}


export default Img;
