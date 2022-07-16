const { Song } = require('../models')
const { Favorite } = require('../models')
module.exports = {
  async index (req, res) {
    try {
      const email = req.body.email
      const songId = req.body.songId
      let favorites = await Favorite.findOne({
        where: { email, songId }
      })
      if (favorites) {
        favorites = await Favorite.destroy({
          where: { email, songId }
        })
        res.send(
                    `the song with the id ${songId} is no longer a part of the list of favorites of the user ${email}`
        )
      } else {
        favorites = await Favorite.create({
          email,
          songId
        })
        res.send(
                    `the song with the id ${songId} was added to the list of favorites of the user ${email}`
        )
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to fetch the list of favorites'
      })
    }
  },
  async getFavoritesByEmail (req, res) {
    try {
      const email = req.params.email
      if (email) {
        const favorites = await Favorite.findAll({
          attributes: ['songId'],
          where: { email }
        })
        res.send(
          favorites.map((favorite) => {
            return favorite.songId
          })
        )
      } else {
        const favorites = await Favorite.findAll({})
        res.send(favorites)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the list of favorites'
      })
    }
  },
  async getPopularSongs (req, res) {
    try {
      const countBySongId = await Favorite.findAll({
        attributes: [
          'songId',
          [
            Favorite.sequelize.literal(
              '(SELECT COUNT(*) FROM Favorites WHERE Favorites.songId = Favorite.songId)'
            ),
            'Count'
          ]
        ],
        distinct: true,
        order: [[Favorite.sequelize.literal('Count'), 'DESC']],
        group: 'songId'
      })
      const popularSongs = []
      for (const item of countBySongId) {
        const song = await Song.findByPk(item.songId)
        popularSongs.push(song)
      }

      res.send(popularSongs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to fetch the list of favorites'
      })
    }
  },

  async delete (req, res) {
    try {
      const favorites = await Favorite.drop()
      res.send(favorites)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the list of favorites'
      })
    }
  }
}
