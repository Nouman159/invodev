import React from 'react'
import Navbar from './Navbar/NavBar'
import Home from './Home/Home'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout