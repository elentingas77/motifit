import { Constants } from './types'
import { Action } from '../../Action.model'

export function getAccountsLoading(isLoading: boolean): Action {
  return {
    type: Constants.GET_ACCOUNTS_LOADING,
    isLoading: isLoading,
  }
}

export function getAccountsSuccess(accounts): Action {
  return {
    type: Constants.GET_ACCOUNTS_SUCCESS,
    accounts: accounts
  }
}

export function getAccountsError(error: string): Action {
  return {
    type: Constants.GET_ACCOUNTS_ERROR,
    error: error,
  }
}

export function createAccountLoading(isLoading: boolean): Action {
  return {
    type: Constants.CREATE_ACCOUNT_LOADING,
    isLoading: isLoading,
  }
}

export function createAccountSuccess(): Action {
  return {
    type: Constants.CREATE_ACCOUNT_SUCCESS
  }
}

export function createAccountError(error: string): Action {
  return {
    type: Constants.CREATE_ACCOUNT_ERROR,
    error: error,
  }
}


export function transferMoneyLoading(isLoading: boolean): Action {
  return {
    type: Constants.TRANSFER_MONEY_LOADING,
    isLoading: isLoading,
  }
}

export function transferMoneySuccess(): Action {
  return {
    type: Constants.TRANSFER_MONEY_SUCCESS
  }
}

export function transferMoneyError(error: string): Action {
  return {
    type: Constants.TRANSFER_MONEY_ERROR,
    error: error,
  }
}

