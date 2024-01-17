import React from "react";
import "../style/Controller.css"

function Controller({name,type,onclick}){
    return(
        <button className={type} onClick={onclick}>{name}</button>
    )
}

export default Controller;