// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ls from 'local-storage'

import('#/vuetify/dist/vuetify.min.css')
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import vi from '#/vee-validate/dist/locale/vi.js'
import VeeValidate, { Validator } from 'vee-validate'
Validator.addLocale(vi)

Vue.use(VeeValidate, {
  locale: ls.get('lang') || 'vi'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
