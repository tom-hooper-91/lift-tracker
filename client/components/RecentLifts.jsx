import React from 'react'

const RecentLifts = ({ liftsByCat, displayExercise }) => {
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Exercise</th>
            <th scope='col'>Weight</th>
            <th scope='col'>Reps</th>
          </tr>
        </thead>
        <tbody>
          {liftsByCat.map(l => {
            return (
              <tr key={l.id}>
                <th scope='row'>{displayExercise(l.exercise)}</th>
                <td>{l.weight}</td>
                <td>{l.reps}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default RecentLifts
