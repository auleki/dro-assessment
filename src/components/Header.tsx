import { useRef, useEffect } from "react"
import { SJumbotron, SNavbar, SButton } from "./StyledComponents"
import Logo from "./Logo"

const Header = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <SJumbotron>
      <SNavbar>
        <Logo />
        {/* <p>Guide</p> */}
      </SNavbar>
      <div className="headerText">
        <div className="title">
          <h2>Find Books With</h2> 
          <Logo />
        </div>
        {/* <input 
          type="text" 
          className="searchTransition" 
          ref={inputRef}
          placeholder="Which book are you looking for?"/> */}
        <SButton onClick={() => props.setToggleSearch(!props.toggleSearch)}>SEARCH</SButton>
      </div>
    </SJumbotron>
  )
} 

export default Header