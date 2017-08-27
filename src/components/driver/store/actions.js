import * as drivers from '@/api/driver'
import {
  GET_DRIVERS
} from './mutations-types'

const getDrivers = ({commit, dispatch}, params = {}) => {
  drivers.getDrivers(params).then(response => {
    if (response.status === 200) {
      commit(GET_DRIVERS, response.data)
    }
  })
}

export default {
  getDrivers
}
