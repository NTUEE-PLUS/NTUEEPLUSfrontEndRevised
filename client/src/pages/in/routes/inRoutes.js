import React from 'react'
import { Route } from 'react-router-dom'
import CareerRoutes from '../container/routes/careerRoutes'
const InRoutes = () => {
    return (
        <>
            {
                /* routes display in "in" */
                <Route path='/in/career' component={CareerRoutes} />
            }
        </>
    )
}

export default InRoutes
