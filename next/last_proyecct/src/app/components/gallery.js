"use client"

import style from "./gallery.module.css"
import Photo from "./photo";
import PhotoB from "./photoB";

function Gallery({image}){
    return(
        <div className={style["project-container"]}>
        
        <PhotoB image="Hero_2.png"/>
        <Photo image="bussiness_man.png"/>
        <Photo image="pictures_wall.jpeg"/>
        <Photo image="kitchen.jpeg"/>
        <Photo image="mobile_app.png"/>
        <Photo image="issima_page.png"/>
        
        </div>
        
    
    )
}

export default Gallery;