import axios from 'axios'

export const login = (info) => {
  return axios.post('/login', info)
}
