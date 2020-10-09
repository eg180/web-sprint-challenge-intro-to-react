import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { BASE_URL } from '../static/Locker'
import Character from './Character'


export default function CharacterList() {
    const [charsFromObjList, setCharacterList] = useState([]);



    useEffect(() => {
        Axios.get(BASE_URL)
        .then((res) => {
            // what you want to do with the obj
            console.log("below is res obj")
            console.log(res);

            setCharacterList(res.data.results);
        
            console.log('below is length of charsFromObjList array')
            console.log(charsFromObjList.length);
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    return(
        null
        // <section>
        //     {characterList.map((chars, id) => {
        //         return <Character key={id} chars={chars} />;
        //     })}
        // </section>

    )
}
