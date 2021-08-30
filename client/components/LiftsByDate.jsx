import React from 'react'

import LiftTable from './LiftTable'

const LiftsByDate = ({ date, setCategory, setDate, setExercise }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All lifts on {date}</h1>
          <LiftTable filter ='date' data={date} setCategory={setCategory} setDate={setDate} setExercise={setExercise} />
        </div>
      </div>
    </>
  )
}

export default LiftsByDate
