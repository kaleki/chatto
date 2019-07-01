'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }); 
    user.associate = function(models){
        User.hasMany(models.newPost,{
            onDelete: "cascade"
        });
    };
  return user;
};