import counterReducer from '@/store/reducers/counter'
import { combineReducers } from 'redux'

const initialState = {
  
}

// eslint-disable-next-line react-directives/no-unused-vars
const rootReducer = (state = initialState, action) => {
  // switch (action.type) {}
  return state
}

const reducers = combineReducers({ root: rootReducer, counter: counterReducer })

export default reducers;