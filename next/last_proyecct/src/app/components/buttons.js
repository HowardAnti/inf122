"use client"

import style from "./buttons.module.css"

function Buttons(){
    const sr=()=>{
        alert("Downloading Document")
    }
    return(
        <div className={style.buttons}>
                <button className={style["btn-primary"]} onClick={sr}>
                    <div className={style["btn-content"]}>
                        <p>Download CV</p>
                        <img src="./download.svg" alt="arrow" class="btn-primary-img"/>
                    </div>
                </button>

                <a class={style["btn-secondary"]} href="mailto:contact@me.com">
                    <div className={style["btn-content"]}>
                        <p>Contact me</p>
                    </div>
                </a>
        </div>
    )
}

export default Buttons;