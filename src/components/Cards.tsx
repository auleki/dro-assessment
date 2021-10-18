import { useState, useEffect } from "react"
import { getBooks } from "../services/handlers"
import { IBook } from "../utilities/types"
import Card from "./Card"
import Pagination from "./Pagination"
import { SCards } from "./StyledComponents"


const Cards = () => {
  const [books, setBooks] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const booksUrl = `https://www.anapioficeandfire.com/api/books?&page=${pageNumber}&pageSize=10`

  useEffect(() => {
    async function fetchBooks () {
      const fetchedBooks = await getBooks(booksUrl)
      setBooks(fetchedBooks)
    }
    fetchBooks()
  }, [pageNumber])

  console.log('Tracking Books State', books)

  const paginateBooks = async (direction: string) => {

    console.log(direction + ' is clicked' + ' page number now' + pageNumber)
    
    switch (direction) {
      case "next": 
        setPageNumber(pageNumber + 1);
        break
      case "prev":
        if (pageNumber === 1) return
        setPageNumber(pageNumber - 1)
        break
      default:
        setPageNumber(1)
    }
  }
  
  return (
    <SCards>
      <div className="cards">
        {books.map((book: IBook) => <Card book={book}/>)}
      </div>
      <Pagination paginateBooks={paginateBooks}/>
    </SCards>
  )
} 

export default Cards