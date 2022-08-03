import { Constants } from './types'
import { Action } from '../../Action.model'

export function getTransactionsLoading(isLoading: boolean): Action {
  return {
    type: Constants.GET_TRANSACTIONS_LOADING,
    isLoading: isLoading,
  }
}

export function getTransactionsSuccess(transactions): Action {
  return {
    type: Constants.GET_TRANSACTIONS_SUCCESS,
    transactions: transactions
  }
}

export function getTransactionsError(error: string): Action {
  return {
    type: Constants.GET_TRANSACTIONS_ERROR,
    error: error,
  }
}


