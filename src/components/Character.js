// Write your Character component here
import React from 'react'



export default function Character(props) {
    const { chars } = props;
    
    return(
        <div>
            <h2>Name: {props.chars.name}</h2>
            <img src={props.chars.image} alt="rick and morty" />
            <h3>{props.chars.gender}</h3>
            <h3>{props.chars.status}</h3>
        </div>
        
    )
}
