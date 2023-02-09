const { response } = require("express");
const { User } = require("../models/index");
const UserService = require("../services/auth-service");

const userService = new UserService();

async function createUser(req, res) {
  try {
    // const existingUser = await User.findOne({
    //   where: {
    //     email: req.body.email,
    //   },
    // });
    // if (!existingUser) {
    //   const response = await User.create(req.body);
    //   return res.status(200).json({
    //
    //   });
    // }
    const response = await userService.createUser(req.body);
    res.status(200).json({
      success: true,
      message: "successfully created a new user",
      error: {},
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      success: false,
      message: "couldn't create a user",
      data: {},
    });
  }
  //   const existingUser = User.findOrCreate({
  //     where: {
  //       email: req.body.email,
  //     },
  //     default: {
  //       ...req.body,
  //     },
  //   });
  //   res.json({
  //     message: "inside auth controller",
  //   });
}

module.exports = {
  createUser,
};
