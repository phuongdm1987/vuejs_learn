import axios from 'axios'
import ls from 'local-storage'

/**
 * -----------------------------------------------------------------------------------------------------------
 * Global axios defaults
 * -----------------------------------------------------------------------------------------------------------
 */
axios.defaults.baseURL = process.env.API_URI
axios.defaults.headers.common['Authorization'] = ls.get('authen', {})
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
