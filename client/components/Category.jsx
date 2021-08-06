import React from 'react'

import { connect } from 'react-redux'

import RecentLifts from './RecentLifts'
import AddLift from './AddLift'
import AddExercise from './AddExercise'

import { setHeading } from '../utils'

const Category = ({ category, setCategory, setDate }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>{setHeading(category)}</h1>
        </div>
      </div>
      <RecentLifts category={category} setCategory={setCategory} setDate={setDate}/>
      <AddLift category={category} />
      <AddExercise category={category}/>
    </>
  )
}

export default connect()(Category)
