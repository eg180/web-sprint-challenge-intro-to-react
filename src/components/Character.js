// Write your Character component here
import React from 'react'
import '../App.css'



export default function Character(props) {
    const { chars } = props;
    
    return(
        <div className="character-profile-container">

            <div className="photo-and-name">
                <h2>Name: {props.chars.name}</h2>
                <img src={props.chars.image} alt="rick and morty" />
            </div>
            
            

            <div className="vitals">
                <h3>Status: {props.chars.status}</h3>
                <h3>Name: {props.chars.name}</h3>
                <h3>Species: {props.chars.species}</h3>
                <h3>Last known location: {props.chars.location.name}</h3>

            </div>

            </div>
    )
}
