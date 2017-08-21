import {
  GET_DRIVERS
} from './mutations-types'

export default {
  [GET_DRIVERS] (state, drivers) {
    state.drivers = drivers
  }
}
