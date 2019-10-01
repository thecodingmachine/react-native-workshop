import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage'],
})

export const ExampleTypes = Types
export default Creators
