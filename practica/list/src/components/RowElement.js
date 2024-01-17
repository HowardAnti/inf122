import React from "react";
import "../style/RowElement.css"
import Controller from "./Controller";
import {useState} from "react";

function RowElement({text}){
    
    const[show,setShow]=useState(true);
    const takeOff = () =>{
        setShow(!show);
      }

    return(
        show? <li>{text} <Controller name="X" type="erase" onclick={takeOff}/></li>:null
    )
}

export default RowElement;