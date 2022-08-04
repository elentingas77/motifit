import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  right: Array<any>
  left: Array<any>
  myWorkout: any
  moves: any
}

const allMoves: any = [
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
];

export const initialState: State = {
  right: [],
  left: allMoves.map(item => item.id),
  moves: allMoves,
  myWorkout: {
    id: 777,
    title: 'My custom workout',
    description: '',
    role: 'Custom',
    calories: 0,
    workoutInProgress: [],
  }
}


export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.SET_LEFT_RED:
      return { ...state, left: [...action.left]}
    case Constants.SET_RIGHT_RED:
      return { ...state, right: [...action.right], myWorkout: {...state.myWorkout, workoutInProgress: [...action.right]}}
    default:
      return state
  }
}
