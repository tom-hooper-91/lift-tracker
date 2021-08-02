import { SET_LIFTS, ADD_LIFT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIFTS:
      return action.lifts
    case ADD_LIFT:
      return [...state, action.lift]
    default:
      return state
  }
}

export default reducer
