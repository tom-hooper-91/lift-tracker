exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('lifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('lifts').insert([
        { id: 1, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5 },
        { id: 2, category: 'back', exercise: 'deadlift', weight: 60, reps: 5 },
        { id: 3, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5 },
        { id: 4, category: 'legs', exercise: 'squat', weight: 50, reps: 5 },
        { id: 5, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8 },
        { id: 6, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5 },
        { id: 7, category: 'back', exercise: 'deadlift', weight: 60, reps: 5 },
        { id: 8, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5 },
        { id: 9, category: 'legs', exercise: 'squat', weight: 50, reps: 5 },
        { id: 10, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8 }
      ])
    })
}
