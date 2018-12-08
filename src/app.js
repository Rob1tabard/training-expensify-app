import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/visibleExpenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
store.subscribe(()=> {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description:'Water bill', createdAt: -21000, amount: 100}))
store.dispatch(addExpense({description:'Gas bill', createdAt: -1000, amount: 12100}))
store.dispatch(addExpense({description:'Rent', createdAt: 21000, amount: 7000}))
store.dispatch(addExpense({description:'Electricity bill', createdAt: 1000, amount: 121100}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
