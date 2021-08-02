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
