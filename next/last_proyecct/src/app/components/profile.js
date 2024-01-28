"use client"

import style from "./profile.module.css"

function Profile({picture,name,profession}){
    return(
        <div className={style.profile}>

                <figure className={style["profile-img"]}>
                    <img src={`/${picture}`} />
                </figure>
                <div className={style["profile-info"]}>
                    <h1>{name}</h1>
                    <p>{profession}</p>
                    <div className={style["profile-social"]}>
                        <a href="https://github.com" target="_blank">
                            <img src="./github.svg" alt="github" className={style["profile-social-img"]}/>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <img src="./twitter.svg" alt="twitter" className={style["profile-social-img"]}/>
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <img src="./linkedin.svg" alt="linkedin" className={style["profile-social-img"]}/>
                        </a>
                        <a href="https://youtube.com" target="_blank">
                            <img src="./youtube.svg" alt="youtube" className={style["profile-social-img"]}/>
                        </a>
                    </div>
                </div>
        </div>

    )
}

export default Profile;