module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    email: DataTypes.STRING,
    songId: DataTypes.INTEGER
  })
  Favorite.associate = function (models) {}

  return Favorite
}
