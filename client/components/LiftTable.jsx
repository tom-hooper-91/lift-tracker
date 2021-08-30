import React from 'react'
import { connect } from 'react-redux'

import { displayExercise } from '../utils'

const LiftTable = ({ lifts, filter, setCategory, data, setDate, setExercise }) => {
  const handleClickDate = (date) => { // clicking on date will render LiftsByDate component and pass in the relevant data
    setDate(date)
    setCategory('date')
  }
  const handleClickExercise = (exercise) => {
    setExercise(exercise)
    setCategory('exercise')
  }
  return (
    <>
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
          {lifts.filter(l => l[filter] === data).map(l => { // use date to filter down store and display lifts
            return (
              l.weight && l.reps
                ? <tr key={l.id}>
                  <th scope='row' role='button' onClick={() => handleClickExercise(l.exercise)}>{displayExercise(l.exercise)}</th>
                  <td>{l.weight}</td>
                  <td>{l.reps}</td>
                  <td role='button' onClick={() => handleClickDate(l.date)}>{l.date}</td>
                </tr>
                : null
            )
          })}
        </tbody>
      </table>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(LiftTable)
