
import NavbarContentWrapper from "./NavbarContentWrapper"
import logo from "../assets/daily-planning.png"



const Navbar = () => {
  
     
  return (
    <NavbarContentWrapper>
        <img style={{ width: "50px", height: "auto", marginTop:"10px"  }} src={logo}></img>
    </NavbarContentWrapper>
  )
}

export default Navbar