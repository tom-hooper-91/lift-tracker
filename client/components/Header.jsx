import React from 'react'

const Header = ({ setCategory }) => {
  return (
    <>
      <div className="row text-center bg-light">
        <div className="col-12 mb-4 mt-2">
          <h1 className='display-1' onClick={() => setCategory('menu')}>Lift Tracker</h1>
        </div>
      </div>
    </>
  )
}

export default Header
