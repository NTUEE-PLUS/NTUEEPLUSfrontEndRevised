import React from 'react'
import Navbar from './component/NavBar'
import Profile from './container/Profile'

//import routes
import InRoutes from './routes/inRoutes'

const InApp = () => {
    return (
        <>
            <Navbar />
            <InRoutes />
            <Profile />
        </>
    )
}

export default InApp
