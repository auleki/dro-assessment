import { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import { PageWrapper } from '../components/StyledComponents'
import { getBooks } from '../services/handlers'



const Home = () => {
  const [books, setBooks] = useState<any>([])
  const [pageNumber, setPageNumber] = useState<number>(1)
  const booksUrl = `https://www.anapioficeandfire.com/api/books?&page=${pageNumber}&pageSize=10`
  
  useEffect(() => {
    async function fetchBooks () {
      const fetchedBooks = await getBooks(booksUrl)
      // console.log('from Home::', fetchedBooks)
      setBooks(fetchedBooks)
    }
    fetchBooks()
  }, [])
  
  return (
    <PageWrapper>
      {/* <SearchModal /> */}
      <Header />
      <Cards />
    </PageWrapper>
  )
} 

export default Home