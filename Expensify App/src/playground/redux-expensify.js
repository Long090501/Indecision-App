import { createStore, combineReducers } from 'redux'
import { v4 as uuidv4 } from 'uuid';

//expenses action

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
    type: 'ADD_EXPENSE',
    expenses: [{
        id: uuidv4(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }]
})

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    update: update
})

//filter action

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text: text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
})

//Reducer

const expensesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expenses]
        case 'REMOVE_EXPENSE':
            return (
                state.filter((element) => {
                    return element[0].id !== action.id
                })
            )
        case 'EDIT_EXPENSE':
            return (
                state.map((element) => {
                    if(element[0].id === action.id) {
                        return {...element[0], ...action.update}
                    }
                    else return element
                })
            )
        default:
            return state;
    }
}

const filtersReducer = (state = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state, text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state, startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state, endDate: action.endDate
            }
        default:
            return state;
    }
}

//createStore

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
}))

//filtering redux data
const filteringData = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((element) => {
        const startMatch = element[0].createdAt >= startDate
        const endMatch = element[0].createdAt <= endDate
        const textMatch = element[0].description.toLowerCase().includes(text.toLowerCase(), 0)
        console.log(text.toLowerCase())
        return startMatch && endMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'amount') {
            if(a.amount < b.amount) return 1
            else return -1
        }
    })
}

//show state
store.subscribe(() => {
    const state = store.getState()
    console.log(filteringData(state.expenses, state.filters))
})

//dispatch action

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100 }))
//store.dispatch(editExpense(expenseTwo.expenses[0].id, { amount: 200 }))
//store.dispatch(setTextFilter('Tuition'))
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())
store.dispatch(setStartDate(-100))
//store.dispatch(setStartDate())
store.dispatch(setEndDate(100))
//store.dispatch(setTextFilter('rent'))



const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the final',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',    //date or amount
        startDate: undefined,
        endDate: undefined
    }
}