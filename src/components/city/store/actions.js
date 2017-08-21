import * as city from '@/api/city'
import {
  GET_ALL_CITY
} from './mutations-types'

const getAllCity = ({commit, dispatch}, params) => {
  city.getAllCity(params).then(response => {
    if (response.status === 200) {
      commit(GET_ALL_CITY, response.data.data)
    } else {
      commit(GET_ALL_CITY, [])
    }
  })
}

export default{
  getAllCity
}
