import { useState, useEffect } from "react"
import { getBooks } from "../services/handlers"
import { IBook } from "../utilities/types"
import Card from "./Card"
import EmptyBook from "./EmptyBook"
import LoadingIndicator from "./LoadingIndicator"
import Pagination from "./Pagination"
import { SCards } from "./StyledComponents"


const Cards = () => {
  const [books, setBooks] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const booksUrl = `https://www.anapioficeandfire.com/api/books?&page=${pageNumber}&pageSize=10`

  useEffect(() => {
    async function fetchBooks () {
      setLoading(true)
      const fetchedBooks = await getBooks(booksUrl)
      setBooks(fetchedBooks)
      setLoading(false)
    }
    fetchBooks()
  }, [pageNumber])

  console.log('Tracking Books State', books)

  const paginateBooks = async (direction: string) => {

    console.log(direction + ' is clicked' + ' page number now' + pageNumber)
    
    switch (direction) {
      case "next": 
        if (pageNumber > 1 && books.length === 0) {
          setPageNumber(1)
        } else {
          setPageNumber(pageNumber + 1);
        }
        
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
        {loading 
          ? <LoadingIndicator />
          : (books.length === 0 && pageNumber > 1) 
          ? <EmptyBook />
          : (books.map((book: IBook) => <Card key={book.isbn} book={book}/>))
        }
      </div>
      <Pagination 
        paginateBooks={paginateBooks} 
        pageNumber={pageNumber}/>
    </SCards>
  )
} 

export default Cards