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
      title: 'Full Bodytest',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 6, 7, 8],
    },
    {
      id: 43535,
      title: 'Full Body',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 2453,
      title: 'Full Body',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 234435,
      title: 'Full Body',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 234245,
      title: 'Full Body',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
      calories: 353,
      imagePath: "workoutItem.jpg",
      workoutInProgress: [1, 2, 3 , 4, 0, 2, 4, 9],
    },
    {
      id: 2342345,
      title: 'Full Body',
      description: 'this workout focuses on the muscles of the entire body',
      role: 'beginner',
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
      isDone: true,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 2,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 3,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 4,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 5,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 6,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 7,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 8,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 9,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 10,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 11,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 12,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 13,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 14,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 15,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 16,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 17,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 18,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 19,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 20,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 21,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 22,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 23,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 24,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 25,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 26,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 27,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 28,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 29,
      isDone: false,
      workoutId: null,
      isRestDay: false,
    },
    {
      id: 30,
      isDone: false,
      workoutId: null,
      isRestDay: false,
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
  healthBenefits: ['A random health benefit 1', 'A random health benefit 1', 'A random health benefit 1', 'A random health benefit 1', 'A random health benefit 1', 'A random health benefit 1'],
  motivationalMessages: ['You are doing so great!', 'Amazing job!', 'Hard work pays off!', 'You are so brave!', 'Keep it up!', 'Do not give up!', 'Keep up the great work!', 'You are unstoppable!'],
  moves: [
    {
      id: 1,
      title: 'Side lungdes1',
      score: 5,
      calories: 20,
      imagePath: 'workoutItem.jpg',
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

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.SET_ROLE:
      return { ...state, role: action.role}
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
