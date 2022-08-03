import { Constants } from './actions/types'
import { Action } from '../Action.model'

export interface State {
  accounts: any []
  getAccountsLoading: boolean
  getAccountsError: string
  createAccountLoading: boolean
  createAccountError: string
  transferMoneyLoading: boolean
  transferMoneyError: string
}

export const initialState: State = {
  accounts: [],
  getAccountsLoading: false,
  getAccountsError: '',
  createAccountLoading: false,
  createAccountError: '',
  transferMoneyLoading: false,
  transferMoneyError: '',
}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case Constants.GET_ACCOUNTS_LOADING:
      return { ...state, getAccountsLoading: action.isLoading }
    case Constants.GET_ACCOUNTS_SUCCESS:
      return { ...state, getAccountsLoading: false, accounts: [...action.accounts] }
    case Constants.GET_ACCOUNTS_ERROR:
      return { ...state, getAccountsLoading: false, getAccountsError: action.error }
    case Constants.CREATE_ACCOUNT_LOADING:
      return { ...state, createAccountLoading: action.isLoading }
    case Constants.CREATE_ACCOUNT_SUCCESS:
      return { ...state, createAccountLoading: false }
    case Constants.CREATE_ACCOUNT_ERROR:
      return { ...state, createAccountLoading: false, createAccountError: action.error }
    case Constants.TRANSFER_MONEY_LOADING:
      return { ...state, transferMoneyLoading: action.isLoading }
    case Constants.TRANSFER_MONEY_SUCCESS:
      return { ...state, transferMoneyLoading: false }
    case Constants.TRANSFER_MONEY_ERROR:
      return { ...state, transferMoneyLoading: false, transferMoneyError: action.error }
    default:
      return state
  }
}
