import React from 'react'
import Block from './Block'
import '../styles/Board.css'
import { useState } from 'react';

function Board(){
    const [value,jump]=useState("X")
    const Click = () =>{
        
        value==="X"? jump("O"):jump("X")
    }

    return(
        <div className='board'>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
            <Block value={value} functionClick={Click}/>
        </div>
    )
}

export default Board;