import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Column from '../Column'
const ColumnRoutes = () => {
    return (
        <>
            <Route path='/in/column' exact component={Column} />
        </>
    )
}

export default ColumnRoutes
