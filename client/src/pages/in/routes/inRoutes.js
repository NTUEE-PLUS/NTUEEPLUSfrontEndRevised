import React from 'react'
import { Route } from 'react-router-dom'
import CareerRoutes from '../container/routes/careerRoutes'
import Career from '../container/Career'
const InRoutes = () => {
    return (
        <>
            {
                <>
                    {/* /* routes display in "in" */}
                    <Route path='/in/career' component={Career}></Route>
                    <CareerRoutes></CareerRoutes>
                </>
            }
        </>
    )
}

export default InRoutes
