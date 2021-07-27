import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

const Category = ({ lifts, category }) => {
  const [liftsByCat, setLiftsByCat] = useState([])
  const setHeading = () => {
    switch (category) {
      case 'chest':
        return 'Chest and Triceps'
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

  useEffect(() => {
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

  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1>{setHeading()}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            {liftsByCat.map(l => {
              return <li key={l.id}>{l.exercise}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    lifts: globalState.lifts
  }
}

export default connect(mapStateToProps)(Category)
