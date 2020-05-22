import { makeCreators, makeTypes } from 'App/Stores/utils'

const Types = {
  // Fetch user informations
  LOGIN: (email, password) => ({ payload: { email, password } }),
  // The operation has started and is loading
  LOGIN_LOADING: null,
  // User informations were successfully fetched
  LOGIN_SUCCESS: (token) => ({ payload: { token } }),
  // An error occurred
  LOGIN_FAILURE: (error) => ({ payload: { error } }),
}
const Creators = makeCreators(Types)

export const LoginBySessionTypes = makeTypes(Types)
export default Creators
