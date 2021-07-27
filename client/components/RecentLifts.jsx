import React from 'react'

export const capitalize = (word) => { // capitalize first letter of word
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase())
}

export const displayExercise = (str) => { // convert snake case to displayable string form
  let words = []
  words = str.split('_')
  words = words.map(word => capitalize(word))
  return words.join(' ')
}

const RecentLifts = ({ liftsByCat }) => {
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Exercise</th>
            <th scope='col'>Weight</th>
            <th scope='col'>Reps</th>
          </tr>
        </thead>
        <tbody>
          {liftsByCat.map(l => {
            return (
              <tr key={l.id}>
                <th scope='row'>{displayExercise(l.exercise)}</th>
                <td>{l.weight}</td>
                <td>{l.reps}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default RecentLifts
