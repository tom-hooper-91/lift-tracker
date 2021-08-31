import React from 'react'
import { connect } from 'react-redux'

import { deleteLift } from '../actions'

import { displayExercise, refactorDate, categoryArr, getLiftsByCat, displayRecentLifts } from '../utils'

const LiftTable = ({ lifts, filter, setCategory, data, setData, category, dispatch }) => {
  const handleClick = (data, cat) => {
    setCategory(cat)
    setData(data)
  }
  const handleDelete = (lift) => {
    dispatch(deleteLift(lift))
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
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categoryArr.includes(category) // checks to see if the category is a body part
            ? displayRecentLifts(getLiftsByCat(lifts, category).map(l => { // if category is a body part use ternery to rule out newly added exercises with no info and display most recent 5 lifts
              return l.weight && l.reps
                ? <tr key={l.id}>
                  <th scope='row' onClick={() => handleClick(l.exercise, 'exercise')} role='button'>{displayExercise(l.exercise)}</th>
                  <td>{l.weight}</td>
                  <td>{l.reps}</td>
                  <td onClick={() => handleClick(l.date, 'date')} role='button'>{refactorDate(l.date)}</td>
                  <td role='button' onClick={() => handleDelete(l)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </td>
                </tr>
                : null
            }))
            : lifts.filter(l => l[filter] === data).map(l => { // if category isnt a body part use data to filter down store and display lifts according to date or exercise
              return (
                l.weight && l.reps
                  ? <tr key={l.id}>
                    <th scope='row' role='button' onClick={() => handleClick(l.exercise, 'exercise')}>{displayExercise(l.exercise)}</th>
                    <td>{l.weight}</td>
                    <td>{l.reps}</td>
                    <td role='button' onClick={() => handleClick(l.date, 'date')}>{refactorDate(l.date)}</td>
                    <td role='button' onClick={() => handleDelete(l)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                      </svg>
                    </td>
                  </tr>
                  : null
              )
            })}
        </tbody>
      </table>
      <p>Select the date or exercise to view more</p>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(LiftTable)
