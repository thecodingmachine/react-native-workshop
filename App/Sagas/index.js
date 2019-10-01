import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/CodeExample/Examples/SimpleExample/Actions'
import { fetchUser } from './CodeExample/Examples/SimpleExample/SimpleExampleSaga'

export default function* root() {
  yield all([
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
  ])
}
