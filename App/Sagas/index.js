import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/CodeExample/Examples/SimpleExample/Actions'
import { LoginBySessionTypes } from 'App/Stores/CodeExample/Examples/LoginBySession/Actions'

import { fetchUser } from './CodeExample/Examples/SimpleExample/SimpleExampleSaga'
import { login } from './CodeExample/Examples/LoginBySession/LoginBySessionSaga'

export default function* root() {
  yield all([
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    takeLatest(LoginBySessionTypes.LOGIN, login),
  ])
}
