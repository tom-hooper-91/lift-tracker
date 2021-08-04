import React from 'react'

import { connect } from 'react-redux'

import { displayExercise, lastFive, getLiftsByCat } from '../utils'

const RecentLifts = ({ lifts, category }) => {
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
              {lastFive(getLiftsByCat(lifts, category).map(l => {
                return l.weight
                  ? <tr key={l.id}>
                    <th scope='row'>{displayExercise(l.exercise)}</th>
                    <td>{l.weight}</td>
                    <td>{l.reps}</td>
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
