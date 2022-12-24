//expenses reducer

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
                        return [{...element[0], ...action.update}]
                    }
                    else return element
                })
            )
        default:
            return state;
    }
}

export {expensesReducer}