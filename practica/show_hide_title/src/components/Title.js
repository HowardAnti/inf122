import React from "react";
import "../styles/Title.css"
import { useState } from 'react';
import Switch from '../components/Switch';

function Title({title}){

    const[show,setShow]=useState(true);

    const showTitle = ()=>{
        setShow(!show);
    }

    return(
        <div className="title-container">
            <Switch text={show? 'Hide':'Show'} onclick={showTitle} />
            {show? <h1 className="capital">{title}</h1> : null}
        </div>
    )
}

export default Title;