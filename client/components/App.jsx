import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Menu from './Menu'
import Category from './Category'
import Footer from './Footer'

import { fetchLifts } from '../actions'

function App ({ dispatch }) {
  const [category, setCategory] = useState('menu') // state for conditionally renderring components

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
          {category !== 'menu' &&
            <Category category={category} />
          }
          <Footer />
        </div>
      </div>
    </>
  )
}

export default connect()(App)
