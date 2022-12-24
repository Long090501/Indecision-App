import React from 'react'
import { shallow } from 'enzyme'
import ConnectedAddExpensePage, { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

test('should add expense page render correctly', () => {
    const onSubmit = jest.fn()
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should submit work correctly', () => {
    const onSubmit = jest.fn()
    const handleSubmit = jest.fn()
    const wrapper = shallow(<AddExpensePage onSubmit = {onSubmit}/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('ExpenseForm').prop('handleSubmit')(expenses[1])
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})