import React from "react";
import './links.scss';
import PropTypes from 'prop-types';

const Links = (props) =>{

    return(
        <>
                <a href="https://google.com/" className={`${props.textTransform} ${props.fontSize} ${props.fontFamily} ${props.color}`}>{props.linkText}{props.children}</a>
        </>
    )
}


  Links.propTypes = {
    linkText:PropTypes.string,
    children: PropTypes.node,
}
export default Links;
