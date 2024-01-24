import React from "react"
import style from './Buton.module.css'

function Button({text,buttonClick,functionClick}){
    return(
        <button className={buttonClick? style["button-click"]:style["button-restart"]} onClick={functionClick}>{text}</button>
    )
}


export default Button;

