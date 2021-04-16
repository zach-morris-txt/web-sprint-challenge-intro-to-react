import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //This state slice is designed for building/accessing my character array:
  const [myCharacters, setMyCharacters] = useState([])



  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        console.log(response.data);
        setMyCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []) //Gonna Need To Review My Dependency...



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
