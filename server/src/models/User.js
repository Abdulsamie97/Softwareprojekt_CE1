const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    // get pass () { return this.password }
    clearpassword: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  // Neues hizugefügte Attribute in User_module in die Datenbank als neue Spalte hinzufügen, löscht die schon gespeicherten Werten nicht, Umbenennung eines Attributes wird übernommen
  // User.sync({ alter: true })
  // Aktualisiert die ganze Datenbank, wenn ein Attribute umbenannt bzw. hinzugefügt, dann wird entsprechend in db übernommen, löscht die schon gespeicherten Werten
  // User.sync({ force: true })
  return User
}
