import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Recruitment from '../Recruitment'
import Recommendation from '../Recommendation'
const CareerRoutes = () => {
    return (
        <>
            <Route
                path='/in/career/recommendation'
                component={Recommendation}
            />

            <Route path='/in/career/recruitment' component={Recruitment} />
        </>
    )
}

export default CareerRoutes
