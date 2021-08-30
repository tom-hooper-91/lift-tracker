import React from 'react'

import { displayExercise } from '../utils'

import LiftTable from './LiftTable'

const LiftsByExercise = ({ exercise, setCategory, setDate, setExercise }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All {displayExercise(exercise)} lifts</h1>
          <LiftTable filter='exercise' data={exercise} setCategory={setCategory} setDate={setDate} setExercise={setExercise} />
        </div>
      </div>
    </>
  )
}

export default LiftsByExercise
