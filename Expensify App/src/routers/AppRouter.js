import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {ExpenseDashboardPage} from '../components/ExpenseDashboardPage'
import {ConnectedAddExpensePage} from '../components/AddExpensePage'
import {EditExpensePage} from '../components/EditExpensePage'
import {HelpPage} from '../components/HelpPage'
import {NotFoundPage} from '../components/NotFoundPage'
import {Header} from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <Header/>   
        <Routes>
            <Route exact path = '/' element = {<ExpenseDashboardPage/>}></Route>
            <Route path = '/create' element = {<ConnectedAddExpensePage/>}></Route>
            <Route path = '/edit/:id' element = {<EditExpensePage/>}></Route>
            <Route path = '/help' element = {<HelpPage/>}></Route>
            <Route path = '/*' element = {<NotFoundPage/>}></Route>
        </Routes>
    </BrowserRouter>
)

export {AppRouter}