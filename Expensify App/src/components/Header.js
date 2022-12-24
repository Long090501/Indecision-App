import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
    <h1>Expensify App</h1>
    <NavLink end to = '/' className={({ isActive }) =>
              isActive ? 'is-active' : undefined
            }>Dashboard</NavLink>
    <NavLink to = '/create' className={({ isActive }) =>
              isActive ? 'is-active' : undefined
            }>Create Expense</NavLink>
    <NavLink to = '/help' className={({ isActive }) =>
              isActive ? 'is-active' : undefined
            }>Help</NavLink>
    </div>
)

export {Header}