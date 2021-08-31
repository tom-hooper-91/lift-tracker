exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('lifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('lifts').insert([
        { id: 1, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 2, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 3, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 4, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 5, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' },
        { id: 6, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 7, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 8, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 9, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 10, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' },
        { id: 11, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 12, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 13, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 14, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 15, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' },
        { id: 16, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 17, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 18, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 19, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 20, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' },
        { id: 21, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 22, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 23, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 24, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 25, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' },
        { id: 26, category: 'chest', exercise: 'bench_press', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 27, category: 'back', exercise: 'deadlift', weight: 60, reps: 5, date: '2021-08-01' },
        { id: 28, category: 'shoulders', exercise: 'overhead_press', weight: 40, reps: 5, date: '2021-08-01' },
        { id: 29, category: 'legs', exercise: 'squat', weight: 50, reps: 5, date: '2021-08-01' },
        { id: 30, category: 'biceps', exercise: 'ez_curl', weight: 10, reps: 8, date: '2021-08-01' }
      ])
    })
}
