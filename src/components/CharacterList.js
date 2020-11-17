import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { BASE_URL } from '../static/Locker'
import Character from './Character'


export default function CharacterList() {
    const [charsFromObjectArray, setCharacterArray] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);


    const fetchData = () => {
        Axios.get(`${BASE_URL}`)
        .then((res) => {
            console.log(typeof(res.data));
            console.log(res.data);
            setCharacterArray(res.data);
        })
        .catch((err) => {
            console.log("Error!")
            console.log(err);
        })
    };

    // useEffect(() => {
    //     console.log('inside the bottom use eff to see if charsFromObjectArray changed')
    //     console.log('below is the length of the array:')
    //     console.log(charsFromObjectArray)
    // }, [charsFromObjectArray]);
  

    return(

        <div className="character-pic-border">
            {charsFromObjectArray.map((chars, id) => {
                return <Character key={id} chars={chars} />;
            })}
        </div>

    )
}
