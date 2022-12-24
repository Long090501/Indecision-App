import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({ setBy = 1 }) => ({
    type: 'SET',
    setBy: setBy
})

const resetCount = ({ resetBy = 1 }) => ({
    type: 'RESET',
    resetBy: resetBy
})

const reducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            }

        case 'SET':
            return {
                count: action.setBy
            }

        case 'RESET':
            return {
                count: 0
            }

        default:
            return state
    }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 3}))

store.dispatch(decrementCount({decrementBy: 5}))

store.dispatch(setCount({setBy: 95}))

store.dispatch(resetCount({resetBy: 0}))