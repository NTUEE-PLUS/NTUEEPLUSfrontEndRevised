import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Pages from './Pages'
import ColumnContent from '../component/ColumnContent'
// import { column_1912_page } from './column_pages'
import { useParams } from 'react-router-dom'
import '../css/ColumnText.css'
const ColumnText = () => {
    let { date } = useParams()
    console.log(Pages[date])
    return <ColumnContent Component={Pages[date]}></ColumnContent>
}

export default ColumnText
