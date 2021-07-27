import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Menu from './Menu'

import { fetchLifts } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchLifts())
  }, [])

  return (
    <>
      <div className='app'>
        <div className="container vh-100 vw-100">
          <Header />
          <Menu />
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
