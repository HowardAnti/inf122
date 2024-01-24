import React from "react";
import "../styles/Block.css"

function Block({text,onclick}){

    return(
        <button className="turnbutton" onClick={onclick}>{text}</button>
    ) 
}

export default Block;