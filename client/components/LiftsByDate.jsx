import React from 'react'
import { connect } from 'react-redux'

import { displayExercise } from '../utils'

const LiftsByDate = ({ date, lifts }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All lifts on {date}</h1>
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
              {lifts.filter(l => l.date === date).map(l => { // use date to filter down store and display lifts
                return (
                  l.weight && l.reps
                    ? <tr key={l.id}>
                      <th scope='row'>{displayExercise(l.exercise)}</th>
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

export default connect(mapStateToProps)(LiftsByDate)
