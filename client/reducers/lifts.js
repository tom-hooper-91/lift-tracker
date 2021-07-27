import { SET_LIFTS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIFTS:
      return action.lifts
    default:
      return state
  }
}

export default reducer
