import React from "react";
import style from './Contator.module.css';
function Contator({nroClicks,mostrar}){
    
    return (
        mostrar ? <div className={style.contator}>{nroClicks}</div> : null
    );

}

export default Contator;