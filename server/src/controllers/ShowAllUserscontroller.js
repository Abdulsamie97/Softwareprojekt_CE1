const { User } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      let users = null
      const search = req.query.search
      if (search) {
        users = await User.findAll({

        })
      } else {
        users = await User.findAll({
          limit: 10
        })
      }
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  },

  async post (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song'
      })
    }
  },
  async put (req, res) {
    try {
      await User.update(req.body, {
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
