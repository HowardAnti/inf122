import React from "react";
import "../styles/Evento.css"

function SocialLink(props){
    return(
        <div className="icons">
            { props.github_link !== '' ?  <a href={props.github_link}><img className="" src={require("../images/github_red.png")} alt="Github"/></a>: null }
            { props.facebook_link !== ''? <a href={props.facebook_link}><img className="" src={require("../images/facebook_red.png")} alt="Facebook"/></a>: null }
            { props.discord_link !== ''?  <a href={props.discord_link}><img className="" src={require("../images/discord_red.png")} alt="Discord"/></a>: null }
            { props.linkedin_link !== ''?  <a href={props.linkedin_link}><img className="" src={require("../images/linkedin_red.png")} alt="Linkedin"/></a>: null }   
        </div>
    )
}

export default SocialLink;