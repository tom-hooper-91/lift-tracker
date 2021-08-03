import React, { useState } from 'react'

import { capitalize } from '../utils'

const AddExercise = ({ category }) => {
  const [formData, setFormData] = useState({
    exercise: '',
    category: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h4>Add Exercise</h4>
          <form action="submit" className='row gy-2 gx-3 align-items-center' onSubmit={(e) => handleSubmit(e)}>
            <div className="col-auto">
              <label htmlFor="autoSizingInput">Exercise</label>
              <input name='exercise' type="text" className='form-control' id='autoSizingInput' placeholder='Exercise' value={formData.exercise} onChange={(e) => handleChange(e)}/>
            </div>
            <div className="col-auto">
              <label htmlFor="autoSizingSelect">Category</label>
              <select name="category" className='form-select' id="autoSizingSelect" value={formData.category} onChange={(e) => handleChange(e)}>
                <option>Choose...</option>
                <option value={category}>{capitalize(category)}</option>
                {category === 'chest' ? <option value='biceps'>Biceps</option> : null}
                {category === 'shoulders' ? <option value='triceps'>Triceps</option> : null}
              </select>
            </div>
            <div className="col-auto">
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddExercise
