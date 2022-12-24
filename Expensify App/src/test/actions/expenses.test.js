import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should add expense wiring up with object', () => {
    const expenseData = {
        description: 'water bill',
        note: 'paid',
        amount: 300,
        createdAt: 0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: [{
            ...expenseData,
            id: expect.any(String)
        }]
    })
})