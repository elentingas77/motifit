import { Constants } from './types'
import { Action } from '../../Action.model'

export function setRole(role: string): Action {
  return {
    type: Constants.SET_ROLE,
    role: role,
  }
}

export function addScore(score): Action {
  return {
    type: Constants.ADD_SCORE,
    score: score,
  }
}

export function addCalories(calories): Action {
  return {
    type: Constants.ADD_CALORIES,
    calories: calories,
  }
}

export function addWorkout(): Action {
  return {
    type: Constants.ADD_WORKOUT,
  }
}

export function addChallenge(): Action {
  return {
    type: Constants.ADD_CHALLENGE,
  }
}
