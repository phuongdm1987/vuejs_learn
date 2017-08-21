<template>
  <v-layout row wrap class="mt-5">
    <v-flex xs4 offset-xs4>
      <h5 class="text-xs-center">Login Form</h5>
      <form>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Email</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="email"
              label="Email"
              v-model="email"
              v-validate="'required|email'"
              :error-messages="errors.has('email') ? [errors.first('email')] : []"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs4>
            <v-subheader>Password</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="password"
              label="Password"
              v-model="password"
              type="password"
              v-validate="'required|min:6'"
              :error-messages="errors.has('password') ? [errors.first('password')] : []"
            >
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-btn block primary :disabled="errors.any()">Login</v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'login'
}
</script>
