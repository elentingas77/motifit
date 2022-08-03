import { Constants } from './types'
import { Action } from '../../Action.model'

export function getUsersLoading(isLoading: boolean): Action {
  return {
    type: Constants.GET_USERS_LOADING,
    isLoading: isLoading,
  }
}

export function getUsersSuccess(users): Action {
  return {
    type: Constants.GET_USERS_SUCCESS,
    users: users
  }
}

export function getUsersError(error: string): Action {
  return {
    type: Constants.GET_USERS_ERROR,
    error: error,
  }
}

export function registerUserLoading(isLoading: boolean): Action {
  return {
    type: Constants.REGISTER_USER_LOADING,
    isLoading: isLoading,
  }
}

export function registerUserSuccess(): Action {
  return {
    type: Constants.REGISTER_USER_SUCCESS
  }
}

export function registerUserError(error: string): Action {
  return {
    type: Constants.REGISTER_USER_ERROR,
    error: error,
  }
}
