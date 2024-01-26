"use client"


import { useEffect,useState } from "react";
import Image from "next/image";
import style from "./dogs.module.css"

function Dog(){

    const [dog,setDog]=useState("/vercel.svg");
    const [estado,setEstado]=useState("esperando")
    const [ability,setAbility]=useState("esperando");
    const url="https://pokeapi.co/api/v2/pokemon/pikachu";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setDog(data.sprites.front_default),setEstado(data.species.name),setAbility(data.abilities[1].ability.name)})
    
        },[])
    return(
        <div className={style.box}>
            <h1>{estado}</h1>
            <Image src={dog} alt="dog" width={250} height={250}/>
            <h1>{ability}</h1>
        </div>
    )
}

export default Dog;