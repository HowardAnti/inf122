import React from "react";
import "../styles/Title.css"

function Title({title,show}){
    return(
        show? <h1 className="capital">{title}</h1> : null
    )
}

export default Title;