export const capitalize = (word) => { // capitalize first letter of word
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase())
}

export const lastFive = (arr) => { // displays last 5 entries in array
  return arr.slice(Math.max(arr.length - 5, 1))
}

export const displayExercise = (str) => { // convert snake case to displayable string form
  let words = []
  words = str.split('_')
  words = words.map(word => capitalize(word))
  return words.join(' ')
}

export const setHeading = (category) => { // displays correct heading based on category
  switch (category) {
    case 'chest':
      return 'Chest and Biceps'
    case 'back':
      return 'Back'
    case 'shoulders':
      return 'Shoulders and Triceps'
    case 'legs':
      return 'Legs'
    default:
      return 'Error'
  }
}

export const setSecondary = (category) => { // returns string of secondary category if applicable
  switch (category) {
    case 'chest':
      return 'biceps'
    case 'back':
      return ''
    case 'shoulders':
      return 'triceps'
    case 'legs':
      return ''
    default:
      return 'Error'
  }
}

export const getLiftsByCat = (lifts, category) => { // sorts global store to only display relevant lifts based on category
  switch (category) {
    case 'chest':
      return lifts.filter(l => l.category === category || l.category === 'biceps')

    case 'back':
      return lifts.filter(l => l.category === category)

    case 'shoulders':
      return lifts.filter(l => l.category === category || l.category === 'triceps')

    case 'legs':
      return lifts.filter(l => l.category === category)

    default:
      return ['error']
  }
}

export const sortExercises = (lifts, category, secondary) => { // create new array of exercises from globalState using category and without double ups
  console.log('secondary is ====', secondary)
  console.log('lifts is ====', lifts)
  const liftsByCat = lifts.filter(lift => {
    if (secondary) { // if secondary category exists return it along with category
      return lift.category === category || lift.category === secondary
    } else return lift.category === category
  }
  )

  console.log('lifts by cat', liftsByCat)

  const exercisesByCat = liftsByCat.map(lift => lift.exercise)

  const sortedExercises = []

  exercisesByCat.forEach(lift => {
    if (!sortedExercises.includes(lift)) sortedExercises.push(lift)
  })

  return sortedExercises
}
