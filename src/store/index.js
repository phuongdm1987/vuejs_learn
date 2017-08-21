/**
 * -----------------------------------------------------------------------------------------------------------
 * Loading dependencies
 * -----------------------------------------------------------------------------------------------------------
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'local-storage'
import createLogger from 'vuex/dist/logger'

/**
 * -----------------------------------------------------------------------------------------------------------
 * Loading vuex modules
 * -----------------------------------------------------------------------------------------------------------
 */
import city from '@/components/city/store'

/**
 * -----------------------------------------------------------------------------------------------------------
 * Vuex base configurations
 * -----------------------------------------------------------------------------------------------------------
 */
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  strict: debug,
  state: {
    logged: false
  },
  actions: {
    logged ({commit}, token) {
      ls.set('authen', token)
      commit('setLogged')
    },
    logout ({commit}) {
      ls.remove('authen')
      commit('setLogout')
    }
  },
  mutations: {
    setLogged (state) {
      state.logged = true
    },
    setLogout (state) {
      state.logged = false
    }
  },
  getters: {
    isLogged: state => state.logged
  },
  modules: {
    city
  },
  plugins: debug ? [createLogger()] : []
})

export default store

