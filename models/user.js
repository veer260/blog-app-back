"use strict";
const bcrypt = require("bcrypt");
const { SALT } = require("../config/serverConfig");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Posts, {
        foreignKey: "uid",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((data) => {
    try {
      const hash = bcrypt.hashSync(data.password, SALT);
      data.password = hash;
    } catch (error) {
      throw {
        error: "cant hash",
      };
    }
  });
  return User;
};
