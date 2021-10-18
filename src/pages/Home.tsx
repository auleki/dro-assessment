import Cards from '../components/Cards'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import { PageWrapper } from '../components/StyledComponents'

const Home = () => {
  return (
    <PageWrapper>
      <SearchModal />
      <Header />
      <Cards />
    </PageWrapper>
  )
} 

export default Home