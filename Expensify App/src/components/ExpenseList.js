import React from 'react'
import { connect } from 'react-redux'
import {ConnectedExpenseListItem} from './ExpenseListItem'
import {ConnectedExpenseListFilters} from './ExpenseListFilters'
import {filteringData} from '../selectors/filtering'

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ConnectedExpenseListFilters></ConnectedExpenseListFilters>
        {props.expenses.map((expense, index) => {
            return <ConnectedExpenseListItem key = {index} expense = {expense[0]}></ConnectedExpenseListItem>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: filteringData(state.expenses, state.filters), 
        filters: state.filters,
    }
} 

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)
export {ConnectedExpenseList}