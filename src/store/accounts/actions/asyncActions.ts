import { 
  getAccountsSuccess, 
  getAccountsError, 
  getAccountsLoading,
  createAccountError,
  createAccountLoading,
  createAccountSuccess,
  transferMoneyError,
  transferMoneyLoading,
  transferMoneySuccess
 } from './creators'
 import history from "../../../browserHistory"

export function getAccounts(id) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(getAccountsLoading(true))
      let response = await api.get('user/' + id + '/accounts')
      dispatch(getAccountsSuccess(response.data))
      console.log(response.data)

    } catch {
      dispatch(getAccountsError('error'))

    } finally {
      dispatch(getAccountsLoading(false))

    }
  }
}


export function createAccount(id) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(createAccountLoading(true))
      let response = await api.post('user/' + id + '/account')
      dispatch(createAccountSuccess())
      console.log(response)
      dispatch(getAccounts(id))

    } catch {
      dispatch(createAccountError('error'))

    } finally {
      dispatch(createAccountLoading(false))

    }
  }
}


export function transferMoney(from, to, amount) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(transferMoneyLoading(true))
      let response = await api.post('account/' + from + '/transfer', {
        toAccountId: to,
        amount: amount
      })
      dispatch(transferMoneySuccess())
      console.log(response)
      history.push("/home")

    } catch {
      dispatch(transferMoneyError('error'))

    } finally {
      dispatch(transferMoneyLoading(false))

    }
  }
}


export function gamble(from, to, amount) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(transferMoneyLoading(true))
      let response = await api.post('account/' + from + '/gamble', {
        opponent: to,
        amount: amount
      })
      dispatch(transferMoneySuccess())
      console.log(response)
      history.push("/home")

    } catch {
      dispatch(transferMoneyError('error'))

    } finally {
      dispatch(transferMoneyLoading(false))

    }
  }
}



export function generatePin(id, amount) {
  return async function (dispatch, getState, { api }) {
    try {

      let response = await api.post('account/' + id + '/pin/generate', {
        amount: amount
      })
      alert("PIN is: " + response.data)
      history.push("/home")

    } catch {
      alert("Something went wrong.")
    }
  }
}


export function executePin(id, pin) {
  return async function (dispatch, getState, { api }) {
    try {

      let response = await api.post('account/' + id + '/pin/execute', {
        pin: pin
      })
      alert("Successfully executed!")
      history.push("/home")

    } catch {
      alert("Something went wrong.")
    }
  }
}


export function seed(id, amount) {
  return async function (dispatch, getState, { api }) {
    try {

      let response = await api.post('account/' + id + '/seed', {
        amount: amount
      })
      alert("Successfully added money to the account.")
      history.push("/home")

    } catch {
      alert("Something went wrong.")
    }
  }
}

