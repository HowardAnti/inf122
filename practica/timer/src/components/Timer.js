import React from "react";
import {useState} from "react";
import Controller from "./Controller";
import "../styles/Timer.css"

function Timer(){
    const[timer,setTimer]=useState(0);
    const[start,setStart]=useState(true);

    const startTimer = () =>{
        if(start){
            window.myTimer = setInterval(() => {setTimer((timer) => timer + 1);}, 1000) 
        }
        
        setStart(false);
    }

    const stopTimer = () =>{
        clearInterval(window.myTimer);
        setStart(true);
    }

    const resetTimer = () =>{
        clearInterval(window.myTimer);
        setTimer(0);
        setStart(true);
    }
    return(
        <div className='principal-container'>
            <h1>Timer</h1>
            <div className='timer'>
                <p>{Math.trunc(timer / 60)} Minutes </p>
                <p>{timer % 60} Seconds</p>
            </div>
            <div className='controller-container'>
            <Controller type={"start"} text={"Start"} onclick={startTimer}/>
            <Controller type={"stop"} text={"Stop"} onclick={stopTimer}/>
            <Controller type={"reset"} text={"Reset"} onclick={resetTimer}/>
            </div>
        </div>
    )

}

export default Timer;