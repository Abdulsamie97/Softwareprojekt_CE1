import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    favoritesList: null
  },
  mutations: {
    setToken (state, token) {
      state.Token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setFavoritesList (state, favoritesList) {
      state.favoritesList = favoritesList
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setFavoritesList ({ commit }, favoritesList) {
      commit('setFavoritesList', favoritesList)
    }
  },
  getters: {
    getUserEmail (state) {
      return state.user.email
    },
    getFavoritesList (state) {
      return state.favoritesList
    }
  }
})
