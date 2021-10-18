import { useState } from "react"
import BookSearch from "./BookSearch"
import CharacterSearch from "./CharacterSearch"
import { SearchHeader, SModal, SubTitle } from "./StyledComponents"

const SearchModal = () => { 
  const [searchContext, setSearchContext] = useState("book")

  return (
    <SModal>
      <SearchHeader>
        <SubTitle>Do you want to search using</SubTitle>
        <section className="searchSelect">
          <div className="bookSelect">
            <label htmlFor="searchSelect">Books</label>
            <input type="radio" id="searchSelect" value="book" />
          </div>
          <div>
            <h4>OR </h4>
          </div>
          <div className="characterSelect">
            <label htmlFor="searchSelect">Characters</label>
            <input type="radio" id="searchSelect" value="character" checked/>
          </div>
        </section>
      </SearchHeader>
      {searchContext !== 'character' ? <BookSearch /> : <CharacterSearch />}
    </SModal>
  )
} 

export default SearchModal  