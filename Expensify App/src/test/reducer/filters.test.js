import filterReducer from '../../reducers/filters'

test('should sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount'})
    expect(state.sortBy).toBe('amount')
})