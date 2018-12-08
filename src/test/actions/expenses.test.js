import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should remove expense from object expenses', () =>{
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should edit an expense from expenses object', () => {
    const action = editExpense('123', {
        note: 'editing my note',
        description: 'adding descritpion'
})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'editing my note',
            description: 'adding descritpion'
        }
    })
})

test('should setup addexpense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 18900,
        createdAt: 1987364829290,
        note: 'next month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup default addexpense action object', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})