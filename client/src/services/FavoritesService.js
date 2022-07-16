import Api from '@/services/Api'

// created FavoriteService which allows to add a song id to the list
// of favorite songs for a certain user
export default {
  postToFavorites (email, songId) {
    return Api().post('favorites', { email: email, songId: songId })
  },
  getFavoritesByEmail (email) {
    return Api().get(`favorites/${email}`)
  },
  getPopularSongs () {
    return Api().get(`popularSongs`)
  }
}
