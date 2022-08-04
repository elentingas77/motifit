import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import fitness from './fitness'
import accounts from './accounts'
import transactions from './transactions'
import users from './users'
import { ENV } from '../constants'
import API from '../api/API'
import browserHistory from '../browserHistory'

const api = new API()

const rootReducer: any = combineReducers({
  fitness: fitness,
  users: users,
  accounts: accounts,
  transactions: transactions
})

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };

export const history = browserHistory

const pReducer = persistReducer(persistConfig, rootReducer);

const store =
  ENV === 'development'
    ? createStore<any, any, any, any>(
        pReducer,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api })))
      )
    : createStore<any, any, any, any>(pReducer, applyMiddleware(thunk.withExtraArgument({ api })))

export const persistor = persistStore(store);

export default store
