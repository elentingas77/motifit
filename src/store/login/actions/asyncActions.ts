import { loginRequestError, loginRequestLoading, loginRequestSuccess } from './creators'
import history from "./../../../browserHistory"
import { setToken, getToken, removeToken, getRole } from "./../../../utils/storage"

export function loginRequest(email, password) {
  return async function (dispatch, getState, { api }) {
    try {

      dispatch(loginRequestLoading(true))
      let response = await api.post('authenticate', { email, password })
      dispatch(loginRequestSuccess())
      await setToken(response.data.jwtToken)
      dispatch(checkIfLoggedIn())

    } catch {
      dispatch(loginRequestError('error'))

    } finally {
      dispatch(loginRequestLoading(false))

    }
  }
}

export function checkIfLoggedIn() {
  return async function (dispatch, getState, { api }) {

    try {

      dispatch(loginRequestLoading(true))
      let role = await getRole()
      if (role)
        if (role == "ROLE_ADMINISTRATOR") {
          history.push("/home")
        } else {
          let response = await api.get('user/details')
          history.push("/user-profile/" + response.data?.id, {user: response.data})
        }
      
    } catch {
      dispatch(loginRequestError('error'))

    } finally {
      dispatch(loginRequestLoading(false))

    }
  }
}

export function logout() {
  return async function (dispatch, getState, { api }) {

      await removeToken()
      history.push("/")
  }
}
