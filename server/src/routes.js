const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const FavoriteController = require('./controllers/FavoriteController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  // register endpoint which takes a postrequest
  // it return a message
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
  app.post('/login', AuthenticationController.login)

  app.get('/songs', SongsController.index)
  app.get('/songs/:songId', SongsController.show)
  app.put('/songs/:songId', SongsController.put)
  app.post('/songs', SongsController.post)
  app.post('/favorites', FavoriteController.index)
  // this get would provide the favorites by email and all the
  // favorites table if no email was provided
  app.get('/favorites/:email', FavoriteController.getFavoritesByEmail)
  // a get endpoint to return the list of popular songs ordered
  // from most popular to least popular
  app.get('/popularSongs', FavoriteController.getPopularSongs)
  // this delete endpoint is used to drop the Favorite table
  app.delete('/favorites', FavoriteController.delete)
  app.get('/bookmarks', BookmarksController.index)
}
