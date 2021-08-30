import { SET_LIFTS, ADD_LIFT, DEL_LIFT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIFTS:
      return action.lifts
    case ADD_LIFT:
      return [...state, action.lift]
    case DEL_LIFT:
      return state.filter(lift => lift.id !== action.id)
    default:
      return state
  }
}

export default reducer
