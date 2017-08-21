import axios from 'axios'
import ls from 'local-storage'

/**
 * -----------------------------------------------------------------------------------------------------------
 * Global axios defaults
 * -----------------------------------------------------------------------------------------------------------
 */
axios.defaults.baseURL = process.env.API_URI
const token = ls.get('authen') || {}
if (token.data) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token.data.access_token}`
}
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
