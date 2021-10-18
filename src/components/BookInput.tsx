import { SButton, SInput, SSearchInput } from "./StyledComponents"

const BookInput = () => {
  return (
    <SSearchInput>
      <select name="inputType" id="inputType">
        <option value="isbn">ISBN</option>
      </select>
      <SInput 
        type="text"  
        placeholder="book title, isbn, publisher, authors"/>
      <SButton>Search</SButton>
    </SSearchInput>
  )
} 

export default BookInput