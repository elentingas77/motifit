import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  transactions: any []
  getTransactionsLoading: boolean
  getTransactionsError: string
}

export const initialState: State = {
  transactions: [],
  getTransactionsLoading: false,
  getTransactionsError: '',
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.GET_TRANSACTIONS_LOADING:
      return { ...state, getTransactionsLoading: action.isLoading }
    case Constants.GET_TRANSACTIONS_SUCCESS:
      return { ...state, getTransactionsLoading: false, transactions: [...action.transactions] }
    case Constants.GET_TRANSACTIONS_ERROR:
      return { ...state, getTransactionsLoading: false, getTransactionsError: action.error }
    default:
      return state
  }
}
