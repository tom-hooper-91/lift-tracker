import React from 'react'

import { connect } from 'react-redux'

import { displayExercise, lastFive, getLiftsByCat } from '../utils'

const RecentLifts = ({ lifts, category, setCategory, setDate, setExercise }) => {
  const handleClickDate = (date) => {
    setDate(date)
    setCategory('date')
  }
  const handleClickExercise = (exercise) => {
    setExercise(exercise)
    setCategory('exercise')
  }
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
                <th scope='col'>Date</th>
              </tr>
            </thead>
            <tbody>
              {lastFive(getLiftsByCat(lifts, category).map(l => { // ternery to rule out newly added exercises with no info
              // try a filter to rule out missing key error
                return l.weight && l.reps
                  ? <tr key={l.id}>
                    <th scope='row' onClick={() => handleClickExercise(l.exercise)} role='button'>{displayExercise(l.exercise)}</th>
                    <td>{l.weight}</td>
                    <td>{l.reps}</td>
                    <td onClick={() => handleClickDate(l.date)} role='button'>{l.date}</td>
                  </tr>
                  : null
              }))}
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

export default connect(mapStateToProps)(RecentLifts)
