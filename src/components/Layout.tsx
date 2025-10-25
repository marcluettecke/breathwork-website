import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout