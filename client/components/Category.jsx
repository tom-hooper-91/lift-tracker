import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import RecentLifts from './RecentLifts'
import AddLift from './AddLift'

const Category = ({ lifts, category, displayExercise }) => {
  const [liftsByCat, setLiftsByCat] = useState([])
  const [exercises, setExercises] = useState([])

  const setHeading = () => {
    switch (category) {
      case 'chest':
        return 'Chest and Biceps'
      case 'back':
        return 'Back'
      case 'shoulders':
        return 'Shoulders and Triceps'
      case 'legs':
        return 'Legs and Triceps'
      default:
        return 'Error'
    }
  }

  useEffect(() => { // use menu state to update local state of lifts to match assigned category
    switch (category) {
      case 'chest':
        setLiftsByCat(lifts.filter(l => l.category === category || l.category === 'biceps'))
        break
      case 'back':
        setLiftsByCat(lifts.filter(l => l.category === category))
        break
      case 'shoulders':
        setLiftsByCat(lifts.filter(l => l.category === category || l.category === 'triceps'))
        break
      case 'legs':
        setLiftsByCat(lifts.filter(l => l.category === category))
        break
      default:
        setLiftsByCat([])
    }
  }, [])

  useEffect(() => { // create new array of exercises without double ups and assign to local state
    const arr = []
    if (liftsByCat.length > 0) { // prevents running on component render
      liftsByCat.forEach(lift => {
        if (!arr.includes(lift.exercise)) arr.push(lift.exercise)
      })
      setExercises(arr)
    }
  }, [liftsByCat])

  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>{setHeading()}</h1>
        </div>
      </div>
      <RecentLifts liftsByCat={liftsByCat} displayExercise={displayExercise}/>
      <AddLift exercises={exercises} displayExercise={displayExercise}/>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(Category)
