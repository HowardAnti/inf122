import React from 'react'
import Block from './Block'
import '../styles/Board.css'
import { useState } from 'react';

function Board(){
    const [blocks,setBlocks]=useState(Array(9).fill(null))
    const [gamer,setGamer]=useState("O");


    const click = (i) => {
        const blocksTemp=[...blocks];
        
        if(blocksTemp[i]===null){
            blocksTemp[i]=gamer;
        setBlocks(blocksTemp);
        
        setGamer(gamer==="X"? "O":"X");
        console.log("pos:",i);
        console.log("ori",blocks);
        console.log("temp",blocksTemp);
        }
    }

    return(
        <div className='gamer'>
            <h1>Gamer: {gamer}</h1>
            <div className='board'>
            
            <Block value={blocks[0]} functionClick={()=>click(0)}/>
            <Block value={blocks[1]} functionClick={()=>click(1)}/>
            <Block value={blocks[2]} functionClick={()=>click(2)}/>
            <Block value={blocks[3]} functionClick={()=>click(3)}/>
            <Block value={blocks[4]} functionClick={()=>click(4)}/>
            <Block value={blocks[5]} functionClick={()=>click(5)}/>
            <Block value={blocks[6]} functionClick={()=>click(6)}/>
            <Block value={blocks[7]} functionClick={()=>click(7)}/>
            <Block value={blocks[8]} functionClick={()=>click(8)}/>
            
        </div>
        </div>
       
    )
}

export default Board;