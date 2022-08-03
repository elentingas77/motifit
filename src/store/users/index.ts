import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  users: any []
  getUsersLoading: boolean
  getUsersError: string
  registerUserLoading: boolean
  registerUserError: string
}

export const initialState: State = {
  users: [],
  getUsersLoading: false,
  getUsersError: '',
  registerUserLoading: false,
  registerUserError: '',
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.GET_USERS_LOADING:
      return { ...state, getUsersLoading: action.isLoading }
    case Constants.GET_USERS_SUCCESS:
      return { ...state, getUsersLoading: false, users: [...action.users] }
    case Constants.GET_USERS_ERROR:
      return { ...state, getUsersLoading: false, getUsersError: action.error }
    case Constants.REGISTER_USER_LOADING:
      return { ...state, registerUserLoading: action.isLoading }
    case Constants.REGISTER_USER_SUCCESS:
      return { ...state, registerUserLoading: false }
    case Constants.REGISTER_USER_ERROR:
      return { ...state, registerUserLoading: false, registerUserError: action.error }
    default:
      return state
  }
}
