import React from 'react'

import { displayExercise } from '../utils'

import LiftTable from './LiftTable'

const LiftsByExercise = ({ exercise, lifts }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All {displayExercise(exercise)} lifts</h1>
          <LiftTable filter='exercise' data={exercise} />
        </div>
      </div>
    </>
  )
}

export default LiftsByExercise
