// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'


//Styled:
const StyledUnselectedCharacter = styled.div `
    color: darkblue;
    text-shadow: -1px -1px 0 #F0F8FF;
    border: 1px dashed blue;
    border-radius: 4rem;
    margin: 1rem;
`
const StyledSelectedCharacter = styled.div`
    color: crimson;
    text-shadow: -1px -1px 0 #F0F8FF;
    border: 1px dashed blue;
    border-radius: 4rem;
    margin: 2rem;
`



export default function Character ({info}) {  

    //This state slice is designed for toggling/displying character details:
    const [selectedCharacter, setSelectedCharacter] = useState(true)

    //Toggle Character Information
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
                <h3>Name: {info.name}</h3>
                <h4>Birth Year: {info.birth_year}</h4>
                <h4>Gender: {info.gender}</h4>
                <h4>Hair Color: {info.hair_color}</h4>
                <h4>Height: {info.height}</h4>
                <button className='selecting' onClick={() => setSelectedCharacter(true)}>Escape</button> 
        </StyledSelectedCharacter>
    )
}
