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

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    update: update
})

export { addExpense, removeExpense, editExpense }