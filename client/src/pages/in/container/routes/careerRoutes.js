import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Recruitment from '../Recruitment'
import Recommendation from '../Recommendation'
const CareerRoutes = () => {
    return (
        <>
            <Route
                exact
                path='/in/career/recommendation'
                component={Recommendation}
            />

            <Route
                exact
                path='/in/career/recruitment'
                component={Recruitment}
            />
        </>
    )
}

export default CareerRoutes
