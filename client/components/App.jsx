import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Menu from './Menu'
import Category from './Category'
import LiftsByDate from './LiftsByDate'
import LiftsByExercise from './LiftsByExercise'
import Footer from './Footer'

import { fetchLifts } from '../actions'

function App ({ dispatch }) {
  const [category, setCategory] = useState('menu') // state for conditionally renderring components
  const [date, setDate] = useState(null) // state for displaying lifts by date
  const [exercise, setExercise] = useState(null) // state for displaying lifts by exercise

  const categoryArr = ['chest', 'back', 'legs', 'shoulders']

  useEffect(() => { // update store with info from db
    dispatch(fetchLifts())
  }, [])

  return (
    <>
      <div className='app'>
        <div className="container vh-100">
          <Header setCategory={setCategory}/>
          {category === 'menu' &&
            <Menu setCategory={setCategory}/>
          }
          {categoryArr.includes(category) &&
            <Category category={category} setCategory={setCategory} setDate={setDate} setExercise={setExercise} />
          }
          {category === 'date' &&
            <LiftsByDate date={date} />
          }
          {category === 'exercise' &&
            <LiftsByExercise exercise={exercise} />
          }
          <Footer />
        </div>
      </div>
    </>
  )
}

export default connect()(App)
