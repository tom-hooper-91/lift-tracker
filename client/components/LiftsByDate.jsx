import React from 'react'

import LiftTable from './LiftTable'

const LiftsByDate = ({ date }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>All lifts on {date}</h1>
          <LiftTable filter ='date' data={date} />
        </div>
      </div>
    </>
  )
}

export default LiftsByDate
