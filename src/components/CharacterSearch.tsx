import { useState } from "react"
import axios, { AxiosResponse } from 'axios'
import CharacterInput from "./CharacterInput"
import { ModalContainer } from "./StyledComponents"

export type IBookName = {
  name: string
}

const CharacterSearch = () => {
  const [characterResults, setCharacterResults] = useState<any>([])


  async function getCharacterBook (url: string) {
    const { data } = await axios.get<IBookName, AxiosResponse>(url)
    // return data.name
  }


  return (
    <ModalContainer>
      <CharacterInput 
        setCharacterResults={setCharacterResults}/>
      {/* Add the already created empty results component */}
      {/* ALSO USE A RESULT COMPONENT */}
      <section>
        <h2>Characters Found:</h2>
        <div>
          {characterResults.map((character: any, i: number) => (
            <section key={i}>
              <p>{character.gender}</p>
              <ul>
                {character.books.map((book: string, i: number) => (
                  <li key={i}>{book}</li>
                ))}
              </ul>
            </section>
          ))}         
        </div>
      </section>
    </ModalContainer>
  )
} 

export default CharacterSearch