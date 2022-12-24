import {setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should set text filter', () => {
    const action = setTextFilter('amount')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'amount'
    })
})