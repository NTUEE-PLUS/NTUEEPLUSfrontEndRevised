import React from 'react'
import { Route } from 'react-router-dom'
import CareerRoutes from '../container/routes/CareerRoutes'
import Column from '../container/Column'
import Career from '../container/Career'
import ColumnText from '../container/ColumnText'
const InRoutes = () => {
    return (
        <>
            {
                <>
                    {/* /* routes display in "in" */}
                    <Route path='/in/career' exact component={Career}></Route>
                    <Route path='/in/column' exact component={Column}></Route>
                    <Route
                        path='/in/column/:date'
                        component={ColumnText}
                    ></Route>

                    <CareerRoutes></CareerRoutes>
                </>
            }
        </>
    )
}

export default InRoutes
