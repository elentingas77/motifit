import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  workouts: Array<any>
  challenges: Array<any>
  role: string
  thirtyDayPlan: Array<any>
  feedback: any
  healthBenefits: Array<string>
  motivationalMessages: Array<string>
  moves: Array<any>
  caloriesBurnedThirtyDays: number
  caloriesToBurnThirtyDays: number
}

export const initialState: State = {
  workouts: [
    {
      id: 2345,
      title: 'Full Bodyt b',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 6, 7, 8],
    },
    {
      id: 43535,
      title: 'Full Body b',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 2453,
      title: 'Full Body i',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Intermediate',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 234435,
      title: 'Full Body i',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Intermediate',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 234245,
      title: 'Full Body e',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Expert',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 2342345,
      title: 'Full Body e',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'Expert',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
  ],
  challenges: [
    {
      id: 2345,
      title: 'Plank Challenge',
      description: 'this workout focuses on the muscles of the entire body',
      score: 564,
      imagePath: "workoutItem.jpg",
      challengeInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 234534,
      title: 'Plank Challenge',
      description: 'this workout focuses on the muscles of the entire body',
      score: 564,
      imagePath: "workoutItem.jpg",
      challengeInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 232445,
      title: 'Plank Challenge',
      description: 'this workout focuses on the muscles of the entire body',
      score: 564,
      imagePath: "workoutItem.jpg",
      challengeInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 242345,
      title: 'Plank Challenge',
      description: 'this workout focuses on the muscles of the entire body',
      score: 564,
      imagePath: "workoutItem.jpg",
      challengeInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 23657545,
      title: 'Plank Challenge',
      description: 'this workout focuses on the muscles of the entire body',
      score: 564,
      imagePath: "workoutItem.jpg",
      challengeInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
  ],
  role: 'Beginner',
  thirtyDayPlan: [
    {
      id: 1,
      isDone: false,
      workoutId: null,
    },
    {
      id: 2,
      isDone: false,
      workoutId: null,
    },
    {
      id: 3,
      isDone: false,
      workoutId: null,
    },
    {
      id: 4,
      isDone: false,
      workoutId: null,
    },
    {
      id: 5,
      isDone: false,
      workoutId: null,
    },
    {
      id: 6,
      isDone: false,
      workoutId: null,
    },
    {
      id: 7,
      isDone: false,
      workoutId: null,
    },
    {
      id: 8,
      isDone: false,
      workoutId: null,
    },
    {
      id: 9,
      isDone: false,
      workoutId: null,
    },
    {
      id: 10,
      isDone: false,
      workoutId: null,
    },
    {
      id: 11,
      isDone: false,
      workoutId: null,
    },
    {
      id: 12,
      isDone: false,
      workoutId: null,
    },
    {
      id: 13,
      isDone: false,
      workoutId: null,
    },
    {
      id: 14,
      isDone: false,
      workoutId: null,
    },
    {
      id: 15,
      isDone: false,
      workoutId: null,
    },
    {
      id: 16,
      isDone: false,
      workoutId: null,
    },
    {
      id: 17,
      isDone: false,
      workoutId: null,
    },
    {
      id: 18,
      isDone: false,
      workoutId: null,
    },
    {
      id: 19,
      isDone: false,
      workoutId: null,
    },
    {
      id: 20,
      isDone: false,
      workoutId: null,
    },
    {
      id: 21,
      isDone: false,
      workoutId: null,
    },
    {
      id: 22,
      isDone: false,
      workoutId: null,
    },
    {
      id: 23,
      isDone: false,
      workoutId: null,
    },
    {
      id: 24,
      isDone: false,
      workoutId: null,
    },
    {
      id: 25,
      isDone: false,
      workoutId: null,
    },
    {
      id: 26,
      isDone: false,
      workoutId: null,
    },
    {
      id: 27,
      isDone: false,
      workoutId: null,
    },
    {
      id: 28,
      isDone: false,
      workoutId: null,
    },
    {
      id: 29,
      isDone: false,
      workoutId: null,
    },
    {
      id: 30,
      isDone: false,
      workoutId: null,
    },
  ],
  caloriesBurnedThirtyDays: 0,
  caloriesToBurnThirtyDays: 0,
  feedback: {
    completedWorkouts: 0,
    completedChallenges: 0,
    calories: 0,
    score: 0,
  },
  healthBenefits: [
    'A random health benefit 1',
    'A random health benefit 2',
    'A random health benefit 3',
    'A random health benefit 4',
    'A random health benefit 5',
    'A random health benefit 6',
    'A random health benefit 7',
    'A random health benefit 8',
    'A random health benefit 9',
    'A random health benefit 10',
    'A random health benefit 11',
    'A random health benefit 12',
    'A random health benefit 13',
    'A random health benefit 14',
    'A random health benefit 15',
  ],
  motivationalMessages: [
    'You are doing so great!',
    'Amazing job!',
    'Hard work pays off!',
    'You are so brave!',
    'Keep it up!',
    'Do not give up!',
    'Keep up the great work!',
    'You are unstoppable!',
  ],
  moves: [
    {
      id: 1,
      title: 'Side lungdes1',
      score: 5,
      calories: 20,
      imagePath: 'Crunch.gif',
      instructions: ' instruction 1 '
    },
    {
      id: 2,
      title: 'Side lungdes2',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 2 '
    },
    {
      id: 3,
      title: 'Side lungdes3',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 3 '
    },
    {
      id: 4,
      title: 'Side lungdes4',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 4 '
    },
    {
      id: 5,
      title: 'Side lungdes5',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 5 '
    },
    {
      id: 6,
      title: 'Side lungdes6',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 6 '
    },
    {
      id: 7,
      title: 'Side lungdes7',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 7 '
    },
    {
      id: 8,
      title: 'Side lungdes8',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 8 '
    },
    {
      id: 9,
      title: 'Side lungdes9',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 9 '
    },
    {
      id: 10,
      title: 'Side lungdes10',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
      instructions: ' instruction 10 '
    },
  ]
}

const calculateCaloriesToBurn = (state, plan): number => {
  let workouts = [...state.workouts]

  const result = plan?.reduce(
    (acc, { workoutId }) => {
    let currentWorkout = workouts.filter((item) => item.id === workoutId)?.pop()

    if (currentWorkout) {
      return acc + currentWorkout?.calories;
    }
    return acc
    },
    0
  );

  return result;
}

const calculateCaloriesBurned = (state, plan): number => {
  let workouts = [...state.workouts]

  const result = plan?.reduce(
    (acc, { workoutId, isDone }) => {
    let currentWorkout = workouts.filter((item) => item.id === workoutId && isDone)?.pop()

    if (currentWorkout) {
      return acc + currentWorkout?.calories;
    }
    return acc
    },
    0
  );

  return result;
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.SET_ROLE:
      let beginnerWorkouts = [...state.workouts].filter((item) => item.role === 'Beginner');
      let intermediateWorkouts = [...state.workouts].filter((item) => item.role === 'Intermediate');
      let expertWorkouts = [...state.workouts].filter((item) => item.role === 'Expert');

      let newWorkoutsList: any = [];

      if (action.role === 'Beginner') {
        newWorkoutsList = [...beginnerWorkouts, ...intermediateWorkouts, ...expertWorkouts]
      } else if (action.role === "Intermediate") {
        newWorkoutsList = [...intermediateWorkouts, ...expertWorkouts, ...beginnerWorkouts]
      } else {
        newWorkoutsList = [...expertWorkouts, ...intermediateWorkouts, ...beginnerWorkouts]
      }

      return { ...state, role: action.role, workouts: newWorkoutsList}
    case Constants.START_FROM_SCRATCH:
      return { ...state, thirtyDayPlan: [...initialState.thirtyDayPlan],
        caloriesToBurnThirtyDays: 0,
        caloriesBurnedThirtyDays: 0
      }
    case Constants.AUTOMATICALLY_GENERATE:
      return { ...state, thirtyDayPlan: [...initialState.thirtyDayPlan]}
    case Constants.MARK_DAY_AS_DONE:
      let newPlan = [...state.thirtyDayPlan ]?.
        map(({ id, isDone, workoutId }) => {
          if (id === action.day) {
            return {
              id,
              isDone: action.isDone,
              workoutId,
            }
          } else {
            return {
              id,
              isDone,
              workoutId,
            }
          }
        });

      
      let res3 = calculateCaloriesToBurn(state, newPlan);
      let res4 = calculateCaloriesBurned(state, newPlan);

      return { ...state, 
          thirtyDayPlan: [...newPlan ], 
          caloriesToBurnThirtyDays: res3,
          caloriesBurnedThirtyDays: res4,
        }
    case Constants.SET_WORKOUT_FOR_DAY:
      let newPlan2 = [...state.thirtyDayPlan ]?.
        map(({ id, isDone, workoutId }) => {
          if (id === action.day) {
            return {
              id,
              isDone,
              workoutId: action.workoutId,
            }
          } else {
            return {
              id,
              isDone,
              workoutId,
            }
          }
        });

      let res1 = calculateCaloriesToBurn(state, newPlan2);
      let res2 = calculateCaloriesBurned(state, newPlan2);

      return { ...state, thirtyDayPlan: [...newPlan2 ],
        caloriesToBurnThirtyDays: res1,
        caloriesBurnedThirtyDays: res2
      }
    case Constants.ADD_CALORIES:
      return { ...state, feedback: { ...state.feedback, calories: state.feedback.calories + action.calories }}
    case Constants.ADD_SCORE:
      return { ...state, feedback: { ...state.feedback, score: state.feedback.score + action.score }}
    case Constants.ADD_WORKOUT:
      return { ...state, feedback: { ...state.feedback, completedWorkouts: state.feedback.completedWorkouts + 1 }}
    case Constants.ADD_CHALLENGE:
      return { ...state, feedback: { ...state.feedback, completedChallenges: state.feedback.completedChallenges + 1 }}
    default:
      return state
  }
}
