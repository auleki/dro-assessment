import { useState } from "react"
import axios, { AxiosResponse } from 'axios'
import CharacterInput from "./CharacterInput"
import { ModalContainer } from "./StyledComponents"

export type IBookName = {
  name: string
}

const CharacterSearch = () => {
  const [characterResults, setCharacterResults] = useState<any>([])


  async function getCharacterBook (url: string): Promise<any> {
    try {
      const result = await axios.get<IBookName, any>(url)
      console.log('getCharacterBook running + ', result.data.name)
      return result.data.name      
    } catch (error) {
      console.log(error)
    }
  }
  // getCharacterBook('https://www.anapioficeandfire.com/api/books/6')
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
                  // <li key={i}>{getCharacterBook(book)}</li>
                  <li key={i}>LINE - {book}</li>
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