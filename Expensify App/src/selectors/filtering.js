import moment from 'moment'

//filtering redux data
const filteringData = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((element) => {
        const createdAtMoment = moment(element.createdAt)
        const startMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = element[0].description ? element[0].description.toLowerCase().includes(text.toLowerCase(), 0) : false
        return startMatch && endMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'amount') {
            if(a[0].amount < b[0].amount) return 1
            else return -1
        }
        else {
            if(a[0].createdAt < b[0].createdAt) return 1
            else return -1
        }
    })
}

export {filteringData}