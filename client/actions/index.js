import { getLifts, addLift } from '../apis/lifts'

export const SET_LIFTS = 'SET_LIFTS'
export const ADD_LIFT = 'ADD_LIFT'

// Action Creators

export const setLifts = (lifts) => {
  return {
    type: SET_LIFTS,
    lifts
  }
}

export const createLift = (lift) => {
  return {
    type: ADD_LIFT,
    lift
  }
}

// Thunks

export const fetchLifts = () => {
  return dispatch => {
    return getLifts()
      .then(lifts => {
        dispatch(setLifts(lifts))
        return null
      })
  }
}

export const addNewLift = (lift) => {
  return dispatch => {
    return addLift(lift)
      .then(() => {
        dispatch(createLift(lift))
        return null
      })
      .catch(err => console.log(err))
  }
}
