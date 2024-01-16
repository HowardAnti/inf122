import React from "react";
import '../styles/Contator.css';
function Contator({nroClicks,mostrar}){
    
    return (
        mostrar ? <div className='contator'>{nroClicks}</div> : null
    );

}

export default Contator;