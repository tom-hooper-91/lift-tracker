import React from 'react'
import { connect } from 'react-redux'

import { displayExercise } from '../utils'

const LiftsByExercise = ({ exercise, lifts }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All {displayExercise(exercise)} lifts</h1>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Exercise</th>
                <th scope='col'>Weight</th>
                <th scope='col'>Reps</th>
                <th scope='col'>Date</th>
              </tr>
            </thead>
            <tbody>
              {lifts.filter(l => l.exercise === exercise).map(l => {
                return (
                  l.weight && l.reps
                    ? <tr key={l.id}>
                      <th scope='row'>
                        {displayExercise(l.exercise)}
                      </th>
                      <td>{l.weight}</td>
                      <td>{l.reps}</td>
                      <td>{l.date}</td>
                    </tr>
                    : null
                )
              })}
            </tbody>
          </table>
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

export default connect(mapStateToProps)(LiftsByExercise)
