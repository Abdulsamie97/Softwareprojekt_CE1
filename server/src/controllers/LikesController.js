const { Likes } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let likes = null
      const search = req.query.search
      if (search) {
        likes = await Likes.findAll({

        })
      } else {
        likes = await Likes.findAll({
          limit: 10
        })
      }
      res.send(likes)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const likes = await Likes.findByPk(req.params.userId)
      res.send(likes)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },
  async put (req, res) {
    try {
      await Likes.update(req.body, {
        where: {
          id: req.params.userId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the song'
      })
    }
  }
}
