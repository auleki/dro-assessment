import CharacterInput from "./CharacterInput"
import { ModalContainer } from "./StyledComponents"

const CharacterSearch = () => {
  return (
    <ModalContainer>
      <CharacterInput />
      <h1>Results from searching using a character</h1>
    </ModalContainer>
  )
} 

export default CharacterSearch