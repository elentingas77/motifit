import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  loginRequestLoading: boolean
  loginRequestError: string
}

export const initialState: State = {
  loginRequestLoading: false,
  loginRequestError: '',
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.LOGIN_REQUEST_LOADING:
      return { ...state, loginRequestLoading: action.isLoading }
    case Constants.LOGIN_REQUEST_SUCCESS:
      return { ...state, loginRequestLoading: false }
    case Constants.LOGIN_REQUEST_ERROR:
      return { ...state, loginRequestLoading: false, loginRequestError: action.error }
    default:
      return state
  }
}
