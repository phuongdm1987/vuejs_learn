import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './locales'
import ls from 'local-storage'

Vue.use(VueI18n)

// Create VueI18n instance with options
export default new VueI18n({
  locale: ls.get('lang') || 'vi', // set locale
  messages: locales // set locale messages
})
