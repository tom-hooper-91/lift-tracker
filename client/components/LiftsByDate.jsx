import React from 'react'

import LiftTable from './LiftTable'

import { refactorDate } from '../utils'

const LiftsByDate = ({ data, setCategory, setData, category }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>All lifts on {refactorDate(data)}</h1>
          <LiftTable filter='date' data={data} setCategory={setCategory} setData={setData} category={category} />
        </div>
      </div>
    </>
  )
}

export default LiftsByDate
