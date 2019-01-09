import authReducer from '../../reducers/authReducer'


test('should ad the id to the state', () => {
    const uid = '123'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should clear the state', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: 'lalalala'}, action)
    expect(state).toEqual({})
})