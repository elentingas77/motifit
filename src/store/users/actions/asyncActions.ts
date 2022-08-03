import { getUsersSuccess, 
  getUsersError, 
  getUsersLoading,
  registerUserError,
  registerUserLoading,
  registerUserSuccess,
 } from './creators'
 import history from "./../../../browserHistory"

export function getUsers() {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(getUsersLoading(true))
      let response = await api.get('users')
      dispatch(getUsersSuccess(response.data))
      console.log(response.data)

    } catch {
      dispatch(getUsersError('error'))

    } finally {
      dispatch(getUsersLoading(false))

    }
  }
}


export function registerUser(email, name, phone, address, password) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(registerUserLoading(true))
      let response = await api.post('register', {
        roles: ["USER"],
        email: email,
        fullName: name,
        phone: phone,
        address: address,
        password: password,
      })
      dispatch(registerUserSuccess())
      console.log(response)
      history.push("/home")

    } catch {
      dispatch(registerUserError('error'))

    } finally {
      dispatch(registerUserLoading(false))

    }
  }
}

