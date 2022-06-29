const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const ShowAllUserscontroller = require('./controllers/ShowAllUserscontroller')

module.exports = (app) => {
// register endpoint which takes a postrequest
// it return a message
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/ShowAllUsers',
    ShowAllUserscontroller.index)
  app.get('/ShowAllUsers/:userId',
    ShowAllUserscontroller.show)
  app.put('/ShowAllUsers/:userId',
    ShowAllUserscontroller.put)
  app.post('/ShowAllUsers',
    ShowAllUserscontroller.post)

  app.get('/songs',
    SongsController.index)
  app.get('/songs/:songId',
    SongsController.show)
  app.put('/songs/:songId',
    SongsController.put)
  app.post('/songs',
    SongsController.post)

  app.get('/bookmarks',
    BookmarksController.index)
}
