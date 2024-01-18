import React from "react";
import {useState} from "react";
import "../atyles/Bar.css"
import ProgressBar from "./ProgressBar";


function Bar(){
    
    const[charge,setCharge]=useState(0);

    return(
        <div className="principal-container">
            <h1>Progress Bar</h1>
                <ProgressBar wdt={charge}/>
            
            <div className="input-container">
                <h2>Input percentage:</h2>
                <input  className="input"
                    type="number" 
                    value={charge} 
                    onChange={charge>100||charge<0? setCharge(0):(e)=>setCharge(e.target.value)}></input>
            </div>
        </div>
    )
}   

export default Bar;