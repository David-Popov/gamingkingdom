import React from 'react'
import Navbar from '../../components/Navbar'
import FooterInApp from '../../components/FooterInApp'

const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <FooterInApp />
        </div>
    )
}

export default MainLayout
