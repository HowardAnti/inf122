import React from 'react'
import Block from './Block'
import '../styles/Board.css'


function BoardD({cuadro,onClick}){
    function setSquare(i){
        <Block
            value={cuadro[i]}
            funcion={()=>onClick(i)}
        />
    }
    
 

    return(
        
            <div className='board'>
            {setSquare(0)}
            {setSquare(1)}
            {setSquare(2)}
            {setSquare(3)}
            {setSquare(4)}
            {setSquare(5)}
            {setSquare(6)}
            {setSquare(7)}
            {setSquare(8)}
            {setSquare(9)}
            
        </div>
        
       
    )
}

export default BoardD;