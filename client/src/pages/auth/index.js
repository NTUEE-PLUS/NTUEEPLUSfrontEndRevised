import React from 'react'
import Navbar from './component/NavBar'

//import routes
import AuthRoutes from './routes/authRoutes'

const AuthApp = () => {
    return (
        <>
            <Navbar />
            <AuthRoutes />
        </>
    )
}

export default AuthApp
