import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Menu from './Menu'
import Category from './Category'
import Footer from './Footer'

import { fetchLifts } from '../actions'

const capitalize = (word) => { // capitalize first letter of word
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase())
}

const displayExercise = (str) => { // convert snake case to displayable string form
  let words = []
  words = str.split('_')
  words = words.map(word => capitalize(word))
  return words.join(' ')
}

function App (props) {
  const [category, setCategory] = useState('menu') // state for conditionally renderring components

  useEffect(() => { // update store with info from db
    props.dispatch(fetchLifts())
  }, [])

  return (
    <>
      <div className='app'>
        <div className="container vh-100">
          <Header setCategory={setCategory}/>
          {category === 'menu' &&
            <Menu setCategory={setCategory}/>
          }
          {category !== 'menu' &&
            <Category category={category} displayExercise={displayExercise}/>
          }
          <Footer />
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

export default connect(mapStateToProps)(App)
