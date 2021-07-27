import React from 'react'

import { connect } from 'react-redux'

const Category = ({ lifts, category }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>{category}</h1>
        </div>
      </div>
    </>
  )
}

export default connect()(Category)
