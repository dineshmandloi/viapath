import React from "react";
import './button.scss';

const Button = (props) =>{
    const btnClass = (props.color==='white')?'whiteBtn':props.color==='green'?'greenBtn':props.color==='wg'?'wgBtn':props.linkBtn==='linkBtn'?'linkBtn':'defaultBtn';
    return(
        <>
          <button className={`${props.fontSize} ${props.textTransform} ${btnClass} commonBtn` }> <i className={props.startIcon}></i> {props.btnText}{props.linkBtn} <i className={props.endIcon}></i> </button>  
        </>
    )
}
Button.defaultProps = {
    btnText:"Lorem ipsum"
}

export default Button;
