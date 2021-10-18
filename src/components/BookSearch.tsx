import BookInput from "./BookInput"
import { ModalContainer } from "./StyledComponents"

const BookSearch = () => {
  return (
    <ModalContainer>
      <BookInput />
      <h1>Results</h1>
    </ModalContainer>
  )
} 

export default BookSearch