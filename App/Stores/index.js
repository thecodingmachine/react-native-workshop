import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './CodeExample/Examples/SimpleExample/Reducers'
import { reducer as LoginBySession } from './CodeExample/Examples/LoginBySession/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    loginBySession: LoginBySession,
  })

  return configureStore(rootReducer, rootSaga)
}
