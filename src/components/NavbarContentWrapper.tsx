
interface NavbarContentWrapperProps {

    children: React.ReactNode;
    }
const NavbarContentWrapper = ({ children }: NavbarContentWrapperProps) => {
  return (
    <div className="navBar-content">
      {children}
    </div>
  )
}

export default NavbarContentWrapper