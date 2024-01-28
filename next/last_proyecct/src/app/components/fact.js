"use client"

import style from "./fact.module.css"

function Fact({text1,text2}){
    return(
        <div class={style["fact-item"]}>
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    )
}

export default Fact;