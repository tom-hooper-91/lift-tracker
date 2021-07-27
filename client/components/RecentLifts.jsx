import React from 'react'

const lastFive = (arr) => {
  return arr.slice(Math.max(arr.length - 5, 1))
}

const RecentLifts = ({ liftsByCat, displayExercise }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Exercise</th>
                <th scope='col'>Weight</th>
                <th scope='col'>Reps</th>
              </tr>
            </thead>
            <tbody>
              {lastFive(liftsByCat.map(l => {
                return (
                  <tr key={l.id}>
                    <th scope='row'>{displayExercise(l.exercise)}</th>
                    <td>{l.weight}</td>
                    <td>{l.reps}</td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default RecentLifts
