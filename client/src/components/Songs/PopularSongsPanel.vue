<template>
  <panel title="Most Popular Songs" titleClass="amber accent-4">
    <v-btn
      class="amber accent-3"
      slot="action"
      dark
      medium
      absolute
      right
      middle
      fab
    >
      <v-icon>star</v-icon>
    </v-btn>
    <div v-for="song in popularSongs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{ song.title }}
          </div>
          <div class="song-artist">
            {{ song.artist }}
          </div>
          <div class="song-genre">
            {{ song.genre }}
          </div>

          <v-btn
            dark
            class="cyan"
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
          >
            View
          </v-btn>
          <v-btn
            v-if="favoritesList.includes(song.id)"
            dark
            class="red"
            @click="AddToFavorites(song.id)"
          >
            <v-icon dark left>delete</v-icon>
            Remove from Favorites
          </v-btn>
          <v-btn v-else dark class="green" @click="AddToFavorites(song.id)">
            <v-icon dark left>add</v-icon>
            Add to Favorites
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import FavoritesService from '@/services/FavoritesService'
export default {
  data () {
    return {
      popularSongs: null,
      userEmail: this.$store.getters['getUserEmail'],
      favoritesList: this.$store.getters['getFavoritesList']
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.popularSongs = (await FavoritesService.getPopularSongs()).data
      }
    }
  },
  methods: {
    async AddToFavorites (songId) {
      const favorites = await FavoritesService.postToFavorites(
        this.userEmail,
        songId
      )
      let favList = this.favoritesList
      if (favList.includes(songId)) {
        const index = favList.indexOf(songId)
        favList.splice(index, 1)
      } else {
        favList.push(songId)
      }
      this.$store.dispatch('setFavoritesList', favList)
      console.log(favList)
      console.log('post', this.favoritesList)
    }
  }
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
