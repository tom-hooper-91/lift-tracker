import { getLifts } from '../apis/lifts'

export const SET_LIFTS = 'SET_LIFTS'

// Action Creators

export const setLifts = (lifts) => {
  return {
    type: SET_LIFTS,
    lifts
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
