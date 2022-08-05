import { Constants } from './actions/types'
import { Action } from '../Action.model'
import { challenges } from '../../data'
import { moves } from '../../data/moves'
import { workouts } from '../../data/workouts'

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
  workouts: workouts,
  challenges: challenges,
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
  moves: moves,
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
