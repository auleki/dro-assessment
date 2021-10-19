import { SSearchHeader, SubTitle } from "./StyledComponents"

const SearchHeader = (props: any) => {
  return (
    <SSearchHeader>
        <SubTitle>Do you want to search using</SubTitle>
        <section className="searchSelect">
          <div className="bookSelect">
            <label htmlFor="searchSelect">Books</label>
            <input 
              type="radio" 
              name="searchSelect" 
              value="book" 
              onChange={props.onSearchSelect}
              checked={props.searchContext === 'book'}
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
              checked={props.searchContext === 'character'}
              onChange={props.onSearchSelect}
              />
              
          </div>
        </section>
      </SSearchHeader>
  )
} 

export default SearchHeader