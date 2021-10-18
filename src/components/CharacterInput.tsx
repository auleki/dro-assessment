import { useState, useEffect } from "react"
import { getCharacters } from "../services/handlers"
import { SInput, SSearchInput, SButton } from "./StyledComponents"

const CharacterInput = (props: any) => {
  // const [characterResults, setCharacterResults] = useState<any>([])
  const [searchType, setSearchType] = useState<string>('name')
  const [characterSearchText, setCharacterSearchText] = useState<string>('')
  
  function onInputChange (e: React.ChangeEvent<HTMLInputElement>) {
    setCharacterSearchText(e.target.value)
  }

  function onSearchTypeChange (event: React.ChangeEvent<HTMLSelectElement>) {
    setSearchType(event.currentTarget.value)
  }
  
  async function fetchCharacters () {
    const charactersUrl = `https://www.anapioficeandfire.com/api/characters?${searchType}=${characterSearchText}`
    console.log(charactersUrl)
    const fetchedCharacters = await getCharacters(charactersUrl)
    console.log('Fetched Characters', fetchedCharacters)
    props.setCharacterResults(fetchedCharacters)
  }
  
  return (
    <SSearchInput>
      <select onChange={onSearchTypeChange}>
        <option value="culture">Culture</option>
        <option value="name">Name</option>
      </select>
      <SInput 
        type="text"   
        placeholder="character name or culture" 
        value={characterSearchText}
        onChange={onInputChange}
        />
      <SButton onClick={fetchCharacters}>Search</SButton>
    </SSearchInput>
  )
} 

export default CharacterInput