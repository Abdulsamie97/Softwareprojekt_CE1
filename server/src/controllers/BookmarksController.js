const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          // eslint-disable-next-line object-shorthand
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the songs'
      })
    }
  }
}
