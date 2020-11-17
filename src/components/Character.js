// Write your Character component here
import React from 'react'
import '../App.css'



export default function Character(props) {
    const { chars } = props;
    
    return(
        <div className="character-profile-container">

            <div className="photo-and-name">
                <h2><span class="label">Name:</span> {props.chars.name}</h2>
                <img src={props.chars.image} alt="rick and morty" />
            </div>
            
            

            <div className="vitals">
                <h3><span class="label">Status:</span> {props.chars.status}</h3>
                <h3><span class="label">Species:</span> {props.chars.species}</h3>
                <h3><span class="label">Last known location:</span> {props.chars.location.name}</h3>

            </div>

            </div>
    )
}
