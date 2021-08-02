import React from 'react'

import { connect } from 'react-redux'

import RecentLifts from './RecentLifts'
import AddLift from './AddLift'

import { setHeading } from '../utils'

const Category = ({ lifts, category }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>{setHeading(category)}</h1>
        </div>
      </div>
      <RecentLifts category={category}/>
      <AddLift category={category} />
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(Category)
