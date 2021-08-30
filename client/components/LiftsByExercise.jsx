import React from 'react'

import { displayExercise } from '../utils'

import LiftTable from './LiftTable'

const LiftsByExercise = ({ data, setCategory, setData, category }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All {displayExercise(data)} lifts</h1>
          <LiftTable filter='exercise' data={data} setCategory={setCategory} setData={setData} category={category} />
        </div>
      </div>
    </>
  )
}

export default LiftsByExercise
