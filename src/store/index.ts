import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import login from './login'
import accounts from './accounts'
import transactions from './transactions'
import users from './users'
import { ENV } from '../constants'
import API from '../api/API'
import browserHistory from '../browserHistory'

const api = new API()

const rootReducer = combineReducers({
  login: login,
  users: users,
  accounts: accounts,
  transactions: transactions
})

export const history = browserHistory

const store =
  ENV === 'development'
    ? createStore<any, any, any, any>(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api })))
      )
    : createStore<any, any, any, any>(rootReducer, applyMiddleware(thunk.withExtraArgument({ api })))

export default store
