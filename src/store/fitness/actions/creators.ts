import { Constants } from './types'
import { Action } from '../../Action.model'

export function setRole(role: string): Action {
  return {
    type: Constants.SET_ROLE,
    role: role,
  }
}
