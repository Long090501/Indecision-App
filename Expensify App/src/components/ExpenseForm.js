import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense[0].description : '',
            amount: props.expense ? (props.expense[0].amount).toString() : '',
            note: props.expense ? props.expense[0].note : '',
            createdAt: props.expense ? moment(props.expense[0].createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    descriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    } 

    amountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    } 

    noteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount info!'}))
        }
        else {
            this.setState(() => ({error: ''}))
            this.props.handleSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
        <div>
            {this.state.error && <h3>{this.state.error}</h3>}
            <form onSubmit = {this.onSubmit}>
                <input type = 'text' placeholder = 'Description' value = {this.state.description} autoFocus
                onChange = {this.descriptionChange}
                ></input>
                <input type = 'text' placeholder = 'Amount' value = {this.state.amount} autoFocus
                onChange = {this.amountChange}></input>
                <textarea type = 'text' placeholder = 'Add a note for your expense (optional)' value = {this.state.note} autoFocus
                onChange = {this.noteChange}></textarea>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <button>Add Expense</button>
            </form>
        </div>
        )
    }
}

export {ExpenseForm}