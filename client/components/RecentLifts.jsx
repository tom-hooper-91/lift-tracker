import React from 'react'

import LiftTable from './LiftTable'

const RecentLifts = ({ category, setCategory, setData }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h4>Recent Lifts</h4>
          <LiftTable category={category} setCategory={setCategory} setData={setData} />
        </div>
      </div>
    </>
  )
}

export default RecentLifts
