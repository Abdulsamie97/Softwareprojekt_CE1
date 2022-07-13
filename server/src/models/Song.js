function countWords (str) {
  const arr = str.split(' ')
  return arr.filter(word => word !== '').length
}
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT,
    lyricslength: countWords(this.lyrics)
  })

  Song.associate = function (models) {
  }

  Song.sync({ alter: true })
  return Song
}
