import { put, call } from 'redux-saga/effects'
import ExampleActions from 'App/Stores/CodeExample/Examples/SimpleExample/Actions'
import { simpleExampleService } from 'App/Services/CodeExample/Examples/SimpleExampleService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user information.
 * Feel free to remove it.
 */
export function* fetchUser() {
  yield put(ExampleActions.FETCH_USER_LOADING())

  // Fetch user information from an API
  const user = yield call(simpleExampleService.fetchUser)
  console.log('user', user)
  if (user) {
    yield put(ExampleActions.FETCH_USER_SUCCESS(user))
  } else {
    yield put(
      ExampleActions.FETCH_USER_FAILURE('There was an error while fetching user information.')
    )
  }
}
