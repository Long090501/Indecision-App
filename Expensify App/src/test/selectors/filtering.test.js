import moment from 'moment'
import filteringData from '../../selectors/filtering'

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

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = filteringData(expenses, filters)
    expect(action).toEqual([expenses[2], expenses[0], expenses[1]])
})