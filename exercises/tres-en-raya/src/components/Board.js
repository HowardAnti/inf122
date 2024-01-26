import React from "react";
import Block from "./Block";
import "../styles/Board.css"

function Board({game,click}){

    //function setBlock(i){
      //  <Block text={game[i]} onclick={(i)=>click(i)}/>
    //}

    // {game.map{gam=><block text={gam} onclick={()=>click()}>}}
    return(
        <div className="board">
            
            <Block text={game[0]} onclick={()=>click(0)}/>
            <Block text={game[1]} onclick={()=>click(1)}/>
            <Block text={game[2]} onclick={()=>click(2)}/>
            <Block text={game[3]} onclick={()=>click(3)}/>
            <Block text={game[4]} onclick={()=>click(4)}/>
            <Block text={game[5]} onclick={()=>click(5)}/>
            <Block text={game[6]} onclick={()=>click(6)}/>
            <Block text={game[7]} onclick={()=>click(7)}/>
            <Block text={game[8]} onclick={()=>click(8)}/>
            
         
        </div>
    )
}

export default Board;