import React from 'react'

// const displayExercises = (lifts) => {
//   let exercises = []
//   lifts.forEach(lift => {
//     if (exercises.includes(lift.exercise)) exercises.push(lift.exercise)
//   })
//   console.log(exercises)
// }

const AddLift = ({ liftsByCat, exercises }) => {
  // need to make array of all exercises displayed properly and without double ups for drop down
  // will also need to make a seperate form to add a new exercise on another page

  return (
    <>
      <form action='submit' className='row gy-2 gx-3 align-items-center'>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingSelect">Exercise</label>
          <select className="form-select" id="autoSizingSelect">
            <option>Choose...</option>
            {exercises.map(e => {
              return <option value={e} key={e}>{e}</option>
            })}
          </select>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">Weight</label>
          <input type="number" className="form-control" id="autoSizingInput" placeholder="Weight" />
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">Reps</label>
          <input type="number" className="form-control" id="autoSizingInput" placeholder="Reps" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}

export default AddLift
