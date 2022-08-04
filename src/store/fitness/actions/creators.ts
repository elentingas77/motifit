import { Constants } from './types'
import { Action } from '../../Action.model'

export function setRole(role: string): Action {
  return {
    type: Constants.SET_ROLE,
    role,
  }
}

export function addScore(score): Action {
  return {
    type: Constants.ADD_SCORE,
    score,
  }
}

export function addCalories(calories): Action {
  return {
    type: Constants.ADD_CALORIES,
    calories,
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

export function startFromScratch(): Action {
  return {
    type: Constants.START_FROM_SCRATCH,
  }
}

export function automaticallyGenerate(): Action {
  return {
    type: Constants.AUTOMATICALLY_GENERATE,
  }
}

export function markDayAsDone(day, isDone): Action {
  return {
    type: Constants.MARK_DAY_AS_DONE,
    day,
    isDone,
  }
}

export function setWorkoutForDay(day, workoutId): Action {
  return {
    type: Constants.SET_WORKOUT_FOR_DAY,
    day,
    workoutId,
  }
}

