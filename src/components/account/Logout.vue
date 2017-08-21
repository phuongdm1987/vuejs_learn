<template></template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      loading: false,
      login: {}
    }
  },
  methods: {
    doLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  mounted () {
    this.doLogout()
  }
}
</script>
