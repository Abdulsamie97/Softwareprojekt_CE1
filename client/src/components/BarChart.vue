<template>
  <panel title="Songs">

      <div v-for="song in songs" :key="song.id">
       <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>

        </v-flex>

        <v-flex xs6>
          <div class="lyricsLength">
          <!--{{song.lyrics}}-->  {{lenPerSong[song.lyrics]}}
          </div>
        </v-flex>
       </v-layout>
      </div>
    </Panel>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null,
      lenPerSong: {}
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
        // const arr = this.songs.lyrics.split(' ')
        // this.songs.lyrics = arr.filter(word => word !== ' ').length
        this.lenPerSong = this.songs.reduce(
          (acc, cur, idx) => (acc = { ...acc, [cur.title]: cur.title.length }),
          {}
        )
      }
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
.lyricsLength {
  font-size: 15px;
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
