import { SInput, SSearchInput } from "./StyledComponents"

const CharacterInput = () => {
  return (
    <SSearchInput>
      <h3>Character Input</h3>
      <SInput type="text" placeholder="search with character name or culture" />
    </SSearchInput>
  )
} 

export default CharacterInput