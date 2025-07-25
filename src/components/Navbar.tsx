
import NavbarContentWrapper from "./NavbarContentWrapper"
import logo from "../assets/daily-planning.png"



const Navbar = () => {
  
     
  return (
    <NavbarContentWrapper>
        <img style={{ width: "60px", height: "auto"  }} src={logo}></img>
    </NavbarContentWrapper>
  )
}

export default Navbar