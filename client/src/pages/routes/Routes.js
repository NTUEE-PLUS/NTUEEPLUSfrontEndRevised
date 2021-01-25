import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//import routes from big pages respectively
import OutApp from '../out/index' // from out
import InApp from '../in/index' // from in
import AuthApp from '../auth/index' // from auth

import Footer from '../out/component/Footer'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path='/' component={<div>XD</div>}></Route> */}
                    <Route path='/' component={OutApp}></Route>
                    <Route path='/in' component={InApp}></Route>
                    <Route path='/auth' component={AuthApp}></Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default App
