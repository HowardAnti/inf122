import React from "react";
import "../styles/Controller.css"


function Controller({type,text,onclick}){
    return(
        <button className={type} onClick={onclick}>
            {text}
        </button>
    )
}

export default Controller;