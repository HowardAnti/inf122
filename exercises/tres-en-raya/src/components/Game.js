import React from "react";
import "../styles/Game.css"
import History from "./History";
import Board from "./Board";
import { useState } from "react";



function Game(){
    

    const[history,setHistory]=useState([
        {cuadros: Array(9).fill(null),last:"X"}
    ]);

    const[turn,setTurn]=useState(0);
    const[gamer,setGamer]=useState("X");
    const[winner,setWinner]=useState(null);
    const[lastturn,setLastturn]=useState(null);
    /*const[nroHistory,setNroHistory]=useState(null);*/

    const click =(i)=>{
        const newMovement=history.slice(0,turn+1);
        const currentMovement=newMovement[newMovement.length-1];
        const cuadros=currentMovement.cuadros.slice();  
        
        console.log(turn);

        if(cuadros[i]===null&&winner===null){
            cuadros[i]=gamer;
            
            setGamer(gamer==="X"? "O":"X");
            
            setHistory(newMovement.concat([{cuadros,last:gamer==="X"? "O":"X"}]));
            setTurn(newMovement.length);
            
        }
        
        if(Winner(cuadros)!==null){
            setWinner(Winner(cuadros));
            setLastturn(turn);
    
        }
        
    }

    /*const newHistory=history.slice(0,nroHistory)
    const newComponent=newHistory[turn]*/

    const jump =(l)=>{
        if(l!==0){
           
            console.log("Movement",l,history[l].cuadros);
            setTurn(l);
            winner!==null? setWinner(null): setWinner(Winner(movement)) ;
            ((history[l].last==="X"||history[l].last==="O")&&l!==lastturn)? setGamer(history[l].last):setWinner(Winner(history[l].cuadros));
        }
        else{
            const prevhistory=[{cuadros: Array(9).fill(null),last: ""}];
            setHistory(prevhistory);
            setTurn(0);
            setWinner(null);
            setGamer("X");
        }
    }



    const sr=()=>{
        console.log(lastturn);
        console.log(history);
    }

    const movement=history[turn];

    return(
        <div className="game-container">
            <div className="game">
                <h1>{turn===9? `Empate`: winner? `Winner: ${winner}`:`Next player: ${gamer}`}</h1>
                <Board game={movement.cuadros} click={(i)=>click(i)} />
                <button className="llbutton" onClick={sr}>History</button>
            </div>
           
            <History history={history} jump={(i)=>jump(i)}/>
            
        </div>
    )
}

function Winner(h){
    const lwinner=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let i=0;i<lwinner.length;i++){
        const [a,b,c]=lwinner[i];
        if(h[a]&&h[a]===h[b]&&h[b]===h[c]){
            return h[a];
        }
    }
    return null;
}

export default Game;