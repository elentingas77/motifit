import { Constants } from './types'
import { Action } from '../../Action.model'

export function setRightRed(right): Action {
  return {
    type: Constants.SET_RIGHT_RED,
    right,
  }
}

export function setLeftRed(left): Action {
  return {
    type: Constants.SET_LEFT_RED,
    left,
  }
}

