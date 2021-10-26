//Imports
import React, {useState} from 'react'
import styled from 'styled-components'


//Styled:
const StyledUnselectedCharacter = styled.div `
    color: darkblue;
    background: lightblue;
    opacity: 0.5;
    text-shadow: -1px -1px 0 ;
    border: 1px dashed blue;
    border-radius: 4rem;
    margin: 1rem;
`
const StyledSelectedCharacter = styled.div`
    color: crimson;
    text-shadow: -1px -1px 0 black;
    border: 1px dashed blue;
    border-radius: 4rem;
    margin: 2rem;
`


//Exports
export default function Character ({info}) {  

    const [selectedCharacter, setSelectedCharacter] = useState(true)

    if(selectedCharacter){
        return (
            <StyledUnselectedCharacter className = 'unselectedcharacter'> 
                <h2>{info.name}</h2>
                <button className='selecting' onClick={() => setSelectedCharacter(false)}>Background Info</button>
            </StyledUnselectedCharacter>
        )
    }
    return (
        <StyledSelectedCharacter className= 'selectedcharacter'>
                <h2>Name: {info.name}</h2>
                <h4>Birth Year: {info.birth_year}</h4>
                <h4>Gender: {info.gender}</h4>
                <h4>Hair Color: {info.hair_color}</h4>
                <h4>Height: {info.height}cm</h4>
                <button className='selecting' onClick={() => setSelectedCharacter(true)}>Escape</button> 
        </StyledSelectedCharacter>
    )
}
