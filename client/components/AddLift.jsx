import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { addNewLift } from '../actions'
import { displayExercise, sortExercises } from '../utils'

const AddLift = ({ dispatch, lifts, category }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    category: '',
    weight: 0,
    reps: 0
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const existinglift = lifts.find(lift => lift.exercise === formData.exercise)
    setFormData({ ...formData, category: existinglift.category }) // logic to add category to form data
  }

  const handeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  useEffect(() => { // allows logic inside handleSubmit to complete
    if (formData.category.length > 0) {
      dispatch(addNewLift(formData))
      setFormData({
        exercise: '',
        category: '',
        weight: 0,
        reps: 0
      })
    }
  }, [handleSubmit])

  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <form action='submit' className='row gy-2 gx-3 align-items-center' onSubmit={(e) => handleSubmit(e)}>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingSelect">Exercise</label>
              <select name='exercise' className="form-select" id="autoSizingSelect" value={formData.exercise} onChange={(e) => handeChange(e)}>
                <option>Choose...</option>
                {sortExercises(lifts, category).map(e => {
                  return <option key={e} value={e}>{displayExercise(e)}</option>
                })}
              </select>
            </div>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingInput">Weight</label>
              <input name='weight' type="number" className="form-control" id="autoSizingInput" placeholder="Weight" value={formData.weight} onChange={(e) => handeChange(e)}/>
            </div>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingInput">Reps</label>
              <input name='reps' type="number" className="form-control" id="autoSizingInput" placeholder="Reps" value={formData.reps} onChange={(e) => handeChange(e)}/>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(AddLift)
