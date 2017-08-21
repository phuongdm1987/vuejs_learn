import {
  GET_ALL_CITY
} from './mutations-types'
export default {
  [GET_ALL_CITY] (state, cities) {
    state.cities = cities
  }
}
