import React from 'react'
import LoginNav from '../../components/LoginNav'
import Footer from '../../components/Footer'

const AuthLayout = ({children}) => {
    return (
        <div>
            <LoginNav />
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout
