import React from 'react'
import ReactDOM from 'react-dom/client'
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)

root.render(<IndecisionApp/>)