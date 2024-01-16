import React from 'react'
import '../styles/Block.css'

function Block({value, functionClick}){
    return(
        <button className='block' onClick={functionClick}>
            {value}
        </button>
    )
}

export default Block;