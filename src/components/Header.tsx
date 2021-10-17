import { CJumbotron, SNavbar } from "./StyledComponents"
import Logo from "./Logo"

const Header = () => {
  return (
    // make this resuable 
    // <CJumbotron height="100vh">
    <CJumbotron>
      <SNavbar>
        <Logo />
        <p>Guide</p>
      </SNavbar>
      <div className="headerText">
        <div className="title">
          <h2>Find Books With</h2> 
          <Logo />
        </div>
        <input type="text" className="searchTransition" placeholder="Which book are you looking for?"/>
      </div>
    </CJumbotron>
  )
} 

export default Header