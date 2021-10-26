//Imports
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import './App.css';
import Character from './components/Character'


//Stateful Component
const App = () => {
  const [myCharacters, setMyCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log(response.data);
        setMyCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters:</h1>
      {
        myCharacters.map(character => {
          return <Character key={character.id} info={character}/>
        })
      }
    </div>
  );
}

export default App;
