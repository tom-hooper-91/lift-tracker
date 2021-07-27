import React, { useState } from 'react'

const AddLift = ({ exercises, displayExercise }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    weight: 0,
    reps: 0
  })
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <form action='submit' className='row gy-2 gx-3 align-items-center' onSubmit={(e) => handleSubmit(e)}>
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingSelect">Exercise</label>
              <select name='exercise' className="form-select" id="autoSizingSelect" value={formData.exercise} onChange={(e) => handeChange(e)}>
                <option>Choose...</option>
                {exercises.map(e => {
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

export default AddLift
