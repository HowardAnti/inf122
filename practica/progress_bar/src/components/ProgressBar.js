import React from "react";
import "../atyles/ProgressBar.css"

function ProgressBar({wdt}){
    return(
        <div className="outer">
            <div className="inner" style={{width: `${wdt}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar;