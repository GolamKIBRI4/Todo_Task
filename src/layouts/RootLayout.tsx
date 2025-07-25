import NavArea from "../components/NavArea"
import Navbar from "../components/Navbar"
import AppLayout from "../components/AppLayout"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <AppLayout>
      <NavArea>
        <Navbar />

      </NavArea>
      <Outlet />
    </AppLayout>
  )
}

export default RootLayout