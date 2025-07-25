import { NavLink } from "react-router-dom"
import NavbarContentWrapper from "./NavbarContentWrapper"
import logo from "../assets/router.png"


const Navbar = () => {
  

  return (
    <NavbarContentWrapper>
        <img style={{ width: "60px", height: "auto"  }} src={logo}></img>
      <ul>
        <NavLink to={"/"}>
          <li>Login</li>
        </NavLink>

        <NavLink to={"/register"}>
          <li>Register</li>
        </NavLink>
        <NavLink to={"/userhome"}>
          <li>Home</li>
        </NavLink>
      </ul>

    </NavbarContentWrapper>
  )
}

export default Navbar