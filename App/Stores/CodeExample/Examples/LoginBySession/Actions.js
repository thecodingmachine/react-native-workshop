import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  login: ['email', 'password'],
  // The operation has started and is loading
  loginLoading: null,
  // User informations were successfully fetched
  loginSuccess: ['token'],
  // An error occurred
  loginFailure: ['error'],
})

export const LoginBySessionTypes = Types
export default Creators
