import React from 'react'

import { connect } from 'react-redux'

const lastFive = (arr) => { // displays last 5 entries in array
  return arr.slice(Math.max(arr.length - 5, 1))
}

const getLiftsByCat = (lifts, category) => { // sorts global store to only display relevant lifts based on category
  switch (category) {
    case 'chest':
      return lifts.filter(l => l.category === category || l.category === 'biceps')

    case 'back':
      return lifts.filter(l => l.category === category)

    case 'shoulders':
      return lifts.filter(l => l.category === category || l.category === 'triceps')

    case 'legs':
      return lifts.filter(l => l.category === category)

    default:
      return ['error']
  }
}

const RecentLifts = ({ displayExercise, lifts, category }) => {
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

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(RecentLifts)
