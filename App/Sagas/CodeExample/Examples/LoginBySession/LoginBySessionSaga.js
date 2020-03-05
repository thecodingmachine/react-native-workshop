import { put, call } from 'redux-saga/effects'
import LoginBySessionActions from 'App/Stores/CodeExample/Examples/LoginBySession/Actions'
import { LoginBySessionService } from 'App/Services/CodeExample/Examples/LoginBySessionService'

export function* login({ email, password }) {
  yield put(LoginBySessionActions.loginLoading())

  // Fetch user information from an API
  const response = yield call(LoginBySessionService.login, email, password)
  if (response) {
    yield put(LoginBySessionActions.loginSuccess(response))
  } else {
    yield put(LoginBySessionActions.loginFailure('email or password incorrect.'))
  }
}
