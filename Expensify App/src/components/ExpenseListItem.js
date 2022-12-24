import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom'

    const ExpenseListItem = (props) => {
    return (
    <div>
    <Link to = {`/edit/${props.expense.id}`}> 
        <h3>{props.expense.description}</h3>
    </Link>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
        <button onClick = {() => {
            props.dispatch(removeExpense(props.expense.id))
        }}>Remove</button>
    </div>
    )
}

const ConnectedExpenseListItem = connect()(ExpenseListItem)
export {ConnectedExpenseListItem}