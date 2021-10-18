import { useState, useEffect } from "react"
import BookInput from "./BookInput"
import { ModalContainer } from "./StyledComponents"

const BookSearch = () => {  
  return (
    <ModalContainer>
      <BookInput />
      <h1>Books Found:</h1>
    </ModalContainer>
  )
} 

export default BookSearch