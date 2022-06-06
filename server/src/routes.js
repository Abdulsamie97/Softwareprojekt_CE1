const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
// register endpoint which takes a postrequest
// it return a message
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login',
    AuthenticationController.login
  )
}
