import { Constants } from './types'
import { Action } from '../../Action.model'

export function loginRequestLoading(isLoading: boolean): Action {
  return {
    type: Constants.LOGIN_REQUEST_LOADING,
    isLoading: isLoading,
  }
}

export function loginRequestSuccess(): Action {
  return {
    type: Constants.LOGIN_REQUEST_SUCCESS,
  }
}

export function loginRequestError(error: string): Action {
  return {
    type: Constants.LOGIN_REQUEST_ERROR,
    error: error,
  }
}
