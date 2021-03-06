/**
 * -----------------------------------------------------------------------------------------------------------
 * Loading dependencies
 * -----------------------------------------------------------------------------------------------------------
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ls from 'local-storage'
import createLogger from 'vuex/dist/logger'
import router from '@/router'

/**
 * -----------------------------------------------------------------------------------------------------------
 * Loading vuex modules
 * -----------------------------------------------------------------------------------------------------------
 */
import city from '@/components/city/store'
import driver from '@/components/driver/store'

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
    },
    checkLogged ({commit}) {
      if (ls.get('authen')) {
        commit('setLogged')
      } else {
        router.push('/login')
      }
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
    city,
    driver
  },
  plugins: debug ? [createLogger()] : []
})

export default store

