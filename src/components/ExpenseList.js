import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpense from '../selectors/visibleExpenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key= {expense.id} {...expense} />
                })
            )   
         }
        
    </div>
)

const mapStateProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateProps)(ExpenseList)