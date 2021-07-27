import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Menu from './Menu'
import Category from './Category'
import Footer from './Footer'

import { fetchLifts } from '../actions'

function App (props) {
  const [category, setCategory] = useState('menu')
  useEffect(() => {
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
            <Category category={category}/>
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
