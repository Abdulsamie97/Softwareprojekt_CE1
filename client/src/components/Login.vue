<template>
  <v-layout column>
    <v-flex xs10>
      <Panel title="Login">
        <v-text-field label="Email" v-model="email"> </v-text-field>
        <br />
        <v-text-field label="Password" type="password" v-model="password">
        </v-text-field>
        <br />
        <div class="danger-alert" v-html="error" />
        <br />
        <v-btn class="cyan" dark @click="login">
          Login
        </v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import FavoritesService from '@/services/FavoritesService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        const favoritesResponse = await FavoritesService.getFavoritesByEmail(
          this.email
        )
        const favoritesList = favoritesResponse.data
        this.$store.dispatch('setFavoritesList', favoritesList)
        console.log(favoritesList)
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

<style scoped></style>
