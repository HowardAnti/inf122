
import React from 'react'
import Block from './Block'
import '../styles/Board.css'
import { useState } from 'react';
import BoardD from './components/BoardD.js';



    

    function Juego(){
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
            <BoardD cuadro={blocks} onClick={click} />
        )
    }