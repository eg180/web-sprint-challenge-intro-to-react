// Write your Character component here
import React from 'react'



export default function Character(props) {
    
    return(
        <div>
            <h1>{props.chars.name}</h1>
            <img src={props.chars.image}> </img>
            <p>{props.chars.gender}</p>
            <p>{props.chars.status}</p>
        </div>
        
    )
}
