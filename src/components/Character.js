// Write your Character component here
import React from 'react'
import '../App.css'



export default function Character(props) {
    const { chars } = props;
    
    return(
        <div className="character-profile">
            <h2>Name: {props.chars.name}</h2>
            <img src={props.chars.image} alt="rick and morty" />
            <h3>Status: {props.chars.status}</h3>
        </div>
        
    )
}
