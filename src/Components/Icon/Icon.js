import React from "react";
import './icon.scss';

const Icon = (props) =>{
    return(
        <>
            <i className={`${props.iconName} ${props.fontSize} ${props.color}`}></i>
        </>
    )
}

export default Icon;
