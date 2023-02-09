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
        onDelete: "cascade",
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
      date: DataTypes.DATE,
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          id: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
