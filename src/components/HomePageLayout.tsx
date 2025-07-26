import React from 'react'
interface HomePageLayoutProps {
  children?: React.ReactNode;       
}

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
  return (
    <div className="home-page-layout">
      
      {children}
      
    </div>
  )
}

export default HomePageLayout