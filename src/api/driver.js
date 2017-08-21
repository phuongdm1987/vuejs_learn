import axios from 'axios'

export const getDrivers = (params) => {
  let remoteUrl = 'users?is_driver=1'
  return axios.get(remoteUrl, {params: params})
}
