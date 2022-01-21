import React from "react";
import  PropTypes  from "prop-types";
import './heading.scss';

const  Heading = (props) =>{
    return(
        <>  
            <props.headingType  className={` ${props.fontSize} ${props.color} ${props.letter} ${props.fontFamily} ${props.textTransform}`}>{props.headingText}</props.headingType>
        </>
    )
}

Heading.propTypes={
    headingText:PropTypes.string.isRequired,
};

Heading.defaultProps = {
    headingText:"Lorem ipsum",
    headingType:'h2'
}


export default Heading ;
