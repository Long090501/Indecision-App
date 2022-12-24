import React from 'react'
import {ExpenseForm} from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

    const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm handleSubmit = {(expense) => {
            props.onSubmit(expense)
        }}/>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
})

const ConnectedAddExpensePage = connect(undefined, mapDispatchToProps)(AddExpensePage)
export { ConnectedAddExpensePage }