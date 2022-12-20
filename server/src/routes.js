const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const LikesController = require('./controllers/LikesController')

module.exports = (app) => {
// register endpoint which takes a postrequest
// it return a message
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.put('/songs/:songId',
    SongsController.put)
  app.post('/songs',
    SongsController.post)

  app.get('/likes',
    LikesController.index)
  app.get('/likes/:userId',
    LikesController.show)
  app.get('/likes/:userId',
    LikesController.put)
  app.get('/likes',
    LikesController.post)

  app.get('/bookmarks',
    BookmarksController.index)
}
