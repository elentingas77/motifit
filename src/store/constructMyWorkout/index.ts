import { Constants } from './actions/types'
import { Action } from '../Action.model'
import { moves } from '../../data'

export interface State {
  right: Array<any>
  left: Array<any>
  myWorkout: any
  moves: any
}

const allMoves: any = [...moves];

export const initialState: State = {
  right: [],
  left: allMoves.map(item => item.id),
  moves: allMoves,
  myWorkout: {
    id: 77777,
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
