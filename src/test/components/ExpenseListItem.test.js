import React from 'react'
import { shallow } from 'enzyme'
import  ExpenseListItem  from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('render expenseListItem with fixtures data', () => {
    // const expense = {...expenses[1]}
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})