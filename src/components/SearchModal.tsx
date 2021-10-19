import { useState } from "react"
import BookSearch from "./BookSearch"
import CharacterSearch from "./CharacterSearch"
import SearchHeader from "./SearchHeader"
import { SModal } from "./StyledComponents"
import ModalToggle from "./ModalToggle"

const SearchModal = (props: any) => { 
  const [searchContext, setSearchContext] = useState("book")

  function onSearchSelect (e: any) {
    console.log(e.target.value)
    setSearchContext(e.target.value)
  }

  return (
    <SModal modalState={props.toggleSearch}>
      <ModalToggle/>
      <SearchHeader
        onSearchSelect={onSearchSelect} 
        searchContext={searchContext}/>
      {searchContext !== 'character' ? <BookSearch /> : <CharacterSearch />}
    </SModal>
  )
} 

export default SearchModal  