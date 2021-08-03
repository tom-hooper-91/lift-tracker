import React from 'react'

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
              <label htmlFor="autoSizingSelect">Exercise</label>
              <input name='exercise' type="text" className='form-control' id='autoSizingInput' placeholder='exercise'/>
            </div>
            <div className="col-auto">
              <button type='submit' className='btn btn-primary'>Sumbit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddExercise
