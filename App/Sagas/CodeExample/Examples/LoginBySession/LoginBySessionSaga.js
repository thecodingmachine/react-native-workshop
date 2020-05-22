import { put, call } from 'redux-saga/effects'
import LoginBySessionActions from 'App/Stores/CodeExample/Examples/LoginBySession/Actions'
import { LoginBySessionService } from 'App/Services/CodeExample/Examples/LoginBySessionService'

export function* login({ payload: { email, password } }) {
  yield put(LoginBySessionActions.LOGIN_LOADING())

  // Fetch user information from an API
  const response = yield call(LoginBySessionService.login, email, password)
  if (response) {
    yield put(LoginBySessionActions.LOGIN_SUCCESS(response))
  } else {
    yield put(LoginBySessionActions.LOGIN_FAILURE('email or password incorrect.'))
  }
}
