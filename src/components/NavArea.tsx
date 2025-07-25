interface NavAreaProps {
  children: React.ReactNode;
}

const NavArea = ({ children }: NavAreaProps) => {
  return (
    <div className="navBar">{children}</div>
  )
}

export default NavArea