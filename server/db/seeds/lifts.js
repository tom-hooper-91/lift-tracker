exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('lifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('lifts').insert([
        { id: 1, category: 'chest', exercise: 'Bench Press', weight: 50, reps: 5 },
        { id: 2, category: 'back', exercise: 'Deadlift', weight: 60, reps: 5 },
        { id: 3, category: 'shoulders', exercise: 'Overhead Press', weight: 40, reps: 5 },
        { id: 4, category: 'legs', exercise: 'Squat', weight: 50, reps: 5 },
        { id: 5, category: 'biceps', exercise: 'EZ Curl', weight: 10, reps: 8 },
        { id: 6, category: 'chest', exercise: 'Bench Press', weight: 50, reps: 5 },
        { id: 7, category: 'back', exercise: 'Deadlift', weight: 60, reps: 5 },
        { id: 8, category: 'shoulders', exercise: 'Overhead Press', weight: 40, reps: 5 },
        { id: 9, category: 'legs', exercise: 'Squat', weight: 50, reps: 5 },
        { id: 10, category: 'biceps', exercise: 'EZ Curl', weight: 10, reps: 8 }
      ])
    })
}
