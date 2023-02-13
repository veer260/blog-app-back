"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "uid",
        onDelete: "CASCADE",
      });
    }
  }
  Posts.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      desc: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      img: DataTypes.STRING,
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: DataTypes.DATE,
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
