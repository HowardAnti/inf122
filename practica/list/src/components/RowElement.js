import React from "react";
import "../style/RowElement.css"
import Controller from "./Controller";


function RowElement({text,onclick}){


    return(
        <div className="rowElement">
            <li>{text}</li>
            <Controller type={'delete'} name={'x'} onclick={onclick}/>    
        </div>
    )
}

export default RowElement;