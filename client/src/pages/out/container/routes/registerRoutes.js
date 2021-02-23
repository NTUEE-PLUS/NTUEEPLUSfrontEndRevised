import React from 'react'
import { Route } from 'react-router-dom'

// import register containers
import RegisterDefault from '../RegisterDefault'
import RegisterFB from '../RegisterFB'

const RegisterRoutes = () => {
    return (
        <>
            <Route
                path='/Register/Register_account'
                exact
                component={RegisterDefault}
            />
            <Route
                path='/Register/Register_facebook'
                exact
                component={RegisterFB}
            />
        </>
    )
}

export default RegisterRoutes
