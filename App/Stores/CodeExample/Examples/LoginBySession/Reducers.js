import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginBySessionTypes } from './Actions'

export const loginLoading = (state) => ({
  ...state,
  loginLoading: true,
  loginError: null,
})

export const loginSuccess = (state, { token }) => ({
  ...state,
  token: token,
  loginLoading: false,
  loginError: null,
})

export const loginFailure = (state, { error }) => ({
  ...state,
  token: null,
  loginLoading: false,
  loginError: error,
})

export const reducer = createReducer(INITIAL_STATE, {
  [LoginBySessionTypes.LOGIN_LOADING]: loginLoading,
  [LoginBySessionTypes.LOGIN_SUCCESS]: loginSuccess,
  [LoginBySessionTypes.LOGIN_FAILURE]: loginFailure,
})
