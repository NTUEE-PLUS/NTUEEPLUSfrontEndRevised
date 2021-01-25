import React from 'react'
import { Route } from 'react-router-dom'

const OutRoutes = () => {
    return (
        <>
            {/* routes display in out */}

            <Route path='/out/test' component={<div>Test</div>}></Route>
        </>
    )
}

export default OutRoutes
