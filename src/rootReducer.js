import { combineReducers } from 'redux';

const initialState = {
    greeting: 'Hello',
    yoBool: false
}

const greetingReducer = (state = initialState, action) => {
switch (action.type) {
    case 'ON_CLICK':
        return ({...state, yoBool: !state.yoBool })
    default:
        return state
}
}

export const rootReducer = combineReducers({app: greetingReducer});