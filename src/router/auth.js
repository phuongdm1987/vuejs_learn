import ls from 'local-storage'
import store from '../store'

const requireAuth = (to, from, next) => {
  let token = ls.get('authen')
  if (!token) {
    store.commit('setLogout')
    next({
      path: '/login'
    })
  } else {
    next()
  }
}

export default {
  requireAuth
}
