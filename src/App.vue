<template>
  <v-app toolbar footer fill-height>
    <!-- menu -->
    <v-navigation-drawer
      persistent
      v-model="drawer"
      v-if="isLogged"
    >
      <v-list>
        <v-list-tile router-link to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('menu.dashboard') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <v-list-tile slot="item" v-if="">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" route-link :to="subItem.action">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t(subItem.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile router-link to="/logout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('menu.logout') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- toolbar -->
    <v-toolbar class="cyan" dark>

      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      </v-toolbar-title>

      <v-toolbar-title>
        Learn Vuejs
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn-toggle v-bind:items="language_options" v-model="language"></v-btn-toggle>
    </v-toolbar>

    <!-- main content -->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

    <!-- footer -->
    <v-footer class="cyan" dark>
      <v-spacer></v-spacer>
      <div class="white--text">Henry © {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import ls from 'local-storage'
import i18n from './lang'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  data: () => ({
    drawer: true,
    language_options: [
      {text: 'VI', value: 'vi'},
      {text: 'EN', value: 'en'}
    ],
    language: ls.get('lang') || 'vi',
    items: [
      {
        action: 'account_box',
        title: 'menu.user',
        items: [
          { title: 'menu.driver', action: 'drivers' },
          { title: 'menu.shop', action: 'shops' },
          { title: 'menu.admin', action: 'admins' }
        ]
      }
    ]
  }),
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    ...mapActions(['checkLogged'])
  },
  mounted () {
    this.checkLogged()
  },
  watch: {
    language () {
      i18n.locale = this.language
      this.$validator.setLocale(this.language)
      ls.set('lang', this.language)
    }
  }
}
</script>

<style scoped>
  #navigation-1 a {
    text-decoration: none;
  }
</style
