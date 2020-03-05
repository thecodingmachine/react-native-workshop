import axios from 'axios'
import { Config } from 'App/Config'

const userApiClient = axios.create({
  baseURL: Config.LOGIN_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function login(email, password) {
  return userApiClient
    .post('/login', { email, password })
    .then((response) => response.data.token)
    .catch((error) => null)
}

export const LoginBySessionService = {
  login,
}
