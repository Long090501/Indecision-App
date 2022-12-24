import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {ExpenseForm} from './ExpenseForm'
import { editExpense } from '../actions/expenses'

const EditExpensePage = () => {
    const getID = useParams()
    const dispatch = useDispatch()
    const expenses = useSelector(state => state.expenses)
    const expense = expenses.find((element) => {
        if(element[0] && getID) {
            return element[0].id === getID.id
        }
    })

    return ( 
    <div>
        <ExpenseForm expense = {expense} handleSubmit = {(element) => {    
            dispatch(editExpense(expense[0].id, element))
        }}></ExpenseForm>
    </div>
    )
}

export {EditExpensePage}