import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchLifts } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchLifts())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Lifts!</h1>
        <ul>
          {props.lifts.map(lift => {
            return <li key={lift.id}>{lift.exercise}</li>
          })}
        </ul>
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
