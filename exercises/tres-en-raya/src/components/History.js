import React from "react";
import "../styles/History.css"

function History({history, jump}){

    const movements=history.map(
        (step,movement)=>{
            const description=movement?
            `Go to # ${movement}`:`Go to start`;
            return(
                <li key={movement}>
                    <button className="lbutton" onClick={()=>jump(movement)}>{description}</button>
                </li>
            );
        }
    );

    return(
        <div className="history">
            <ul className="table">{movements}</ul>
        </div>
    );    

}

export default History;