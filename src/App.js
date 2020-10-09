import React, { useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import { BASE_URL } from './static/locker'

const App = () => {


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(()=> {
    fetchData()
  }, []);


  const fetchData = () => {
      Axios.get(`${BASE_URL}`)
      .then((res)=> {
          /// do stuff here
          console.log(res)
      })
      .catch((err)=> {
          console.log(err)
      })
  }

  return (
    <div className="App">
      <h1 className="Header">Characterds</h1>
    </div>
  );
}

export default App;
