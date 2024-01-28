"use client"

import style from "./facts.module.css"
import Fact from "./fact";

function Facts(){
    return(
        <div class={style.facts}>
            <Fact text1="7" text2="Years of work experience" />
            <Fact text1="50+" text2="Completed projects" />
            <Fact text1="20+" text2="Satisfied customers" />
        </div>
    )
}

export default Facts;