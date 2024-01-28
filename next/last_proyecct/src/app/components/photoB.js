"use client"

import style from "./photoB.module.css"

function PhotoB({image}){
    return(
    <div className={style["content-card-img"]}>
        <img class={style["image-grayscale"]} 
            src={`/${image}`}
            />
        <div className={style["content-card-img-overlay"]}></div>
        <div className={style["content-card-img-detail"]}>
            <p className={style.title}>Smarter Trading 411</p>
            <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
            <button className={style.btn}>
            <img src={"/link.svg"}/>
            </button>
        </div>
        
    </div>

    
    )
}

export default PhotoB;