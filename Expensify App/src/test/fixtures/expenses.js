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

export default expenses