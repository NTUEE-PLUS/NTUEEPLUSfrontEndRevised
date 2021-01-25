import React from 'react'
import { Route } from 'react-router-dom'

// import containers
import About from '../container/About'
import History from '../container/History'
import Team from '../container/Team'

import Contact from '../container/Contact'
import Support from '../container/Support'

import Login from '../container/Login'
import RegisterRoutes from '../container/routes/registerRoutes'
import Forget from '../container/Forget'

import ResetPassword from '../container/ResetPassword'

const OutRoutes = () => {
    return (
        <>
            {/* routes display in out */}

            {/* <Route exact path='/' component={<div>Test</div>}></Route> */}
            <Route path='/About' component={About}></Route>
            <Route path='/Contact' component={Contact}></Route>
            <Route path='/Support' component={Support}></Route>
            <Route path='/History' component={History}></Route>
            <Route path='/Team' component={Team}></Route>
            <Route path='/Login' component={Login}></Route>
            <Route path='/Register' component={RegisterRoutes}></Route>
            <Route path='/Forget' component={Forget}></Route>
            <Route path='/ResetPassword' component={ResetPassword}></Route>
        </>
    )
}

export default OutRoutes
