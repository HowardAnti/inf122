"use client"

import style from "./photo.module.css"

function Photo({image}){
    return(
        <div class={style["content-card-img"]}>
            <img class={style["image-grayscale"]} 
            src={`/${image}`}
            />
            <div class={style["content-card-img-overlay"]}></div>
        </div>
    )
}

export default Photo;