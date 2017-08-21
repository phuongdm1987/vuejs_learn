<template>
  <v-layout row wrap class="mt-5">
    <v-flex xs4 offset-xs4>
      <h5 class="text-xs-center">Login Form</h5>
      <form @submit.prevent="doLogin">
        <v-layout row>
          <v-flex xs4>
            <v-subheader>{{ $t("form.phone") }}</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="phone"
              label="Phone"
              v-model="login.phone"
              v-validate="'required|numeric|min:8|max:12'"
              :error-messages="errors.has('phone') ? [errors.first('phone')] : []"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>{{ $t("form.password") }}</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="password"
              label="Password"
              v-model="login.password"
              type="password"
              v-validate="'required|min:6'"
              :error-messages="errors.has('password') ? [errors.first('password')] : []"
            >
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-btn block primary :loading="loading" :disabled="errors.any()" @click.prevent="doLogin">{{ $t("form.login") }}</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import { login } from '@/api/account'
export default {
  name: 'login',
  data () {
    return {
      loading: false,
      login: {}
    }
  },
  methods: {
    doLogin () {
      this.loading = true
      login(this.login).then(response => {
        this.loading = false
        if (response.data.access_token) {
          this.$store.dispatch('logged', response)
          this.$router.push({name: 'Dashboard'})
        }
      })
      this.loading = false
    }
  }
}
</script>
