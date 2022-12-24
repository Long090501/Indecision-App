import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseForm from '../../components/ExpenseForm'

test('should expense form component render correctly with data', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should set amount if value input valid', () => {
    const value = '10.10'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input'). at(1). simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should call onSubmit prop for valid data', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} handleSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0][0].description,
        amount: expenses[0][0].amount,
        note: expenses[0][0].note,
        createdAt: expenses[0][0].createdAt
    })
})