import { actionTypes } from '@/store/actions'

const counterState = {
  counter: 0
}

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
  case actionTypes.INCREMENT_COUNTER: {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  case actionTypes.DECREMENT_COUNTER: {
    return {
      ...state,
      counter: state.counter - 1
    }
  }
  }
  return state
}

export default counterReducer;