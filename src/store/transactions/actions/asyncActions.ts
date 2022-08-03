import { 
  getTransactionsSuccess, 
  getTransactionsError, 
  getTransactionsLoading,
 } from './creators'
 import history from "../../../browserHistory"

export function getTransactions(id) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(getTransactionsLoading(true))
      let response = await api.get('account/' + id + '/transactions')
      dispatch(getTransactionsSuccess(response.data))
      console.log(response.data)

    } catch {
      dispatch(getTransactionsError('error'))

    } finally {
      dispatch(getTransactionsLoading(false))

    }
  }
}


export function reverse(id) {
  return async function (dispatch, getState, { api }) {
    try {
      let response = await api.post('transaction/' + id + '/undo')
      alert("Successfully reversed the transaction")
      history.push('/home')
    } catch {
      alert("Something wrong happened")

    }
  }
}


export function modify(id, a) {
  return async function (dispatch, getState, { api }) {
    try {
      let response = await api.put('transaction/' + id, { amount: a })
      alert("Successfully modified the transaction")
      history.push('/home')
    } catch {
      alert("Something wrong happened")

    }
  }
}
