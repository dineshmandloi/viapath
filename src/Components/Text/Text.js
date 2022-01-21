import React from "react";
import './text.scss';
import PropTypes from 'prop-types';

const Text = (props) =>{
   
    return(
        <>
            <props.textType  className={`${props.textTransform}  ${props.fontSize} ${props.fontFamily} ${props.color}`}>{props.text}{props.textNumber}</props.textType>
        </>
    )
}

Text.propTypes ={
    text:PropTypes.string,
    textNumber:PropTypes.number

}



export default Text;
