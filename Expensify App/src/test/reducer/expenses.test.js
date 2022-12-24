import expensesReducer from "../../reducers/expenses";
import moment from 'moment'

const expenses = [
    [{
        id: 1,
        description: 'gas bill',
        note: 'a',
        amount: 500,
        createdAt: moment(0).subtract(3, 'days').valueOf()
    }],
    [{
        id: 2,
        description: 'water bill',
        note: 'b',
        amount: 300,
        createdAt: 0
    }],
    [{
        id: 3,
        description: 'internet bill',
        note: 'c',
        amount: 900,
        createdAt: moment(0).add(3, 'days').valueOf()
    }]
]

test('should default value wiring up', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1][0].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should add expense by id', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expenses: [{
            id: 4,
            description: 'rent bill',
            note: '4',
            amount: 10000,
            createdAt: moment(0).add(12, 'days').valueOf()
        }]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expenses ])
})