import React from 'react'

const Menu = ({ setCategory }) => {
  return (
    <>
      <div className="row mt-4">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className='btn btn-dark pt-5 pb-5 ' onClick={() => setCategory('chest')}>Chest & Biceps</button>
          <button className='btn btn-dark pt-5 pb-5' onClick={() => setCategory('back')}>Back</button>
          <button className='btn btn-dark pt-5 pb-5' onClick={() => setCategory('shoulders')}>Shoulders and Triceps</button>
          <button className='btn btn-dark pt-5 pb-5' onClick={() => setCategory('legs')}>Legs</button>
        </div>
      </div>
    </>
  )
}

export default Menu
