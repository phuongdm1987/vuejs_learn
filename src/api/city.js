import axios from 'axios'

export const getAllCity = (params) => {
  let remoteUrl = 'cities'

  return axios.get(remoteUrl, {params: params})
}
