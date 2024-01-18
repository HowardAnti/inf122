import React from "react";
import Controller from "./Controller";
import {useState} from "react";
import RowElement from "./RowElement";
import "../style/List.css"

function List(){

    const[nroRow,setNroRow]=useState(0);
    const[list,setList]=useState([]);
    const[text,setText]=useState('');

    const addRow = () =>{
        setList([...list,{id: nroRow,text}])
        setText('');
        setNroRow(nroRow+1);
    }

    const deleteRow = (id) =>{
        setList((saver)=>saver.filter((list)=>(list.id!==id)));
        console.log(list);
    }

    return(
        <div className="list">
            <div className="">
                <input  className="inputInfo"
                        type="text"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        placeholder="Add city"
                
                ></input>
                <Controller type={'add'} name={'add'} onclick={addRow}></Controller>
            </div>
            <ol className="elements">
                {
                    list.map((list)=>(<RowElement key={list.id} text={list.text} onclick={()=>deleteRow(list.id)}/>))
                }
            </ol>
        </div>
    )

    
}

export default List;