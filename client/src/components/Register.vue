<template>
 <v-layout column >
   <v-flex xs10 >
    <Panel title="Register">
      <v-text-field
        label="Email"
        v-model="email"
        >
      </v-text-field>
      <br>
      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        >
      </v-text-field>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
      <v-btn
        class="cyan" dark
        @click="register">
        Register
      </v-btn>
    </Panel>
   </v-flex>
  </v-layout>
 </template>

<!-- watch and mounted shows how two-way binding on v model works for input boxes-->
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
