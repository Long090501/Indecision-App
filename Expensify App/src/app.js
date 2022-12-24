import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import {AppRouter} from './routers/AppRouter'
import {configureStore} from './store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const store = configureStore()
const state = store.getState()

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)

const jsx = (
    <Provider store = {store}>
        <AppRouter></AppRouter>
    </Provider>
)

root.render(jsx)