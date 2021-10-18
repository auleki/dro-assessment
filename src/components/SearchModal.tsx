import { useState } from "react"
import BookSearch from "./BookSearch"
import CharacterSearch from "./CharacterSearch"
import { SSearchHeader, SModal, SubTitle } from "./StyledComponents"

const SearchModal = () => { 
  const [searchContext, setSearchContext] = useState("book")

  function onSearchSelect (e: any) {
    console.log(e.target.value)
    setSearchContext(e.target.value)
  }

  return (
    <SModal>
      {/* extract Search Header into a component */}
      <SSearchHeader>
        <SubTitle>Do you want to search using</SubTitle>
        <section className="searchSelect">
          <div className="bookSelect">
            <label htmlFor="searchSelect">Books</label>
            <input 
              type="radio" 
              name="searchSelect" 
              value="book" 
              onChange={onSearchSelect}
              checked={searchContext === 'book'}
              />
          </div>
          <div>
            <h4>OR </h4>
          </div>
          <div className="characterSelect">
            <label htmlFor="searchSelect">Characters</label>
            <input 
              type="radio" 
              name="searchSelect" 
              value="character" 
              checked={searchContext === 'character'}
              onChange={onSearchSelect}
              />
              
          </div>
        </section>
      </SSearchHeader>
      {searchContext !== 'character' ? <BookSearch /> : <CharacterSearch />}
    </SModal>
  )
} 

export default SearchModal  