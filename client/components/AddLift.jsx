import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { addNewLift } from '../actions'
import { displayExercise, sortExercises, setSecondary, createSQLDate } from '../utils'

// need to add date to lift

const AddLift = ({ dispatch, lifts, category }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    category: '',
    weight: 0,
    reps: 0
  })
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // logic to add category and date to form data
    const existinglift = lifts.find(lift => lift.exercise === formData.exercise)

    setFormData({ ...formData, category: existinglift.category, date: createSQLDate() })

    // trigger useEffect

    setSubmit(!submit)
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
        reps: 0,
        date: ''
      })
    }
  }, [submit])

  return (
    <>
      <h4 className='text-center'>Add Lift</h4>
      <form action='submit' className='row gy-2 gx-3 text-center' onSubmit={(e) => handleSubmit(e)}>
        <div className="col-3">
          <label htmlFor="autoSizingSelect">Exercise</label>
          <select name='exercise' className="form-select" id="autoSizingSelect" value={formData.exercise} onChange={(e) => handeChange(e)}>
            <option>Choose...</option>
            {sortExercises(lifts, category, setSecondary(category)).map(e => {
              return <option key={e} value={e}>{displayExercise(e)}</option>
            })}
          </select>
        </div>
        <div className="col-3">
          <label htmlFor="autoSizingInput">Weight</label>
          <input name='weight' type="number" className="form-control" id="autoSizingInput" value={formData.weight} onChange={(e) => handeChange(e)}/>
        </div>
        <div className="col-3">
          <label htmlFor="autoSizingInput">Reps</label>
          <input name='reps' type="number" className="form-control" id="autoSizingInput" value={formData.reps} onChange={(e) => handeChange(e)}/>
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-dark mt-4">Submit</button>
        </div>
      </form>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(AddLift)
