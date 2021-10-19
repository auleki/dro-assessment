import { useRef, useEffect } from "react"
import { SJumbotron, SNavbar } from "./StyledComponents"
import Logo from "./Logo"

const Header = (props: any) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
 
//  inputRef.current?.onfocus(event: any)

  // useEffect(() => {
  //   triggerModal()
  // }, [inputRef])

  return (
    <SJumbotron>
      <SNavbar>
        <Logo />
        <p>Guide</p>
      </SNavbar>
      <div className="headerText">
        <div className="title">
          <h2>Find Books With</h2> 
          <Logo />
        </div>
        <input 
          type="text" 
          className="searchTransition" 
          ref={inputRef}
          placeholder="Which book are you looking for?"/>
      </div>
    </SJumbotron>
  )
} 

export default Header