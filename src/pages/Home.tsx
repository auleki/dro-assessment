import { useState } from 'react'
import Cards from '../components/Cards'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'
import { PageWrapper } from '../components/StyledComponents'

const Home = () => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false)

  const openModal = () => setToggleSearch(!toggleSearch) 
    
  return (
    <PageWrapper>
      <SearchModal 
        toggleSearch={toggleSearch}
        setToggleSearch={setToggleSearch}
        />
      <Header 
        openModal={openModal}
        setToggleSearch={setToggleSearch} 
        toggleSearch={toggleSearch}
        />
      <Cards />
    </PageWrapper>
  )
} 

export default Home