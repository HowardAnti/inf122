import React from "react";
import "../styles/Switch.css"

function Switch({text, onclick}){
    return(
        <button onClick={onclick}>
            {text}
        </button>
    )
}

export default Switch;