import React from "react"
import '../styles/Buton.css'

function Button({text,buttonClick,functionClick}){
    return(
        <button className={buttonClick? "button-click":"button-restart"} onClick={functionClick}>{text}</button>
    )
}


export default Button;

