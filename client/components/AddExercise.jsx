import React from 'react'

import { capitalize } from '../utils'

const AddExercise = ({ category }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h4>Add Exercise</h4>
          <form action="submit" className='row gy-2 gx-3 align-items-center' onSubmit={(e) => handleSubmit(e)}>
            <div className="col-auto">
              <label htmlFor="autoSizingInput">Exercise</label>
              <input name='exercise' type="text" className='form-control' id='autoSizingInput' placeholder='Exercise'/>
            </div>
            <div className="col-auto">
              <label htmlFor="autoSizingSelect">Category</label>
              <select name="category" className='form-select' id="autoSizingSelect">
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
