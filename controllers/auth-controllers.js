const { response } = require("express");
const { User } = require("../models/index");
const UserService = require("../services/auth-service");

const userService = new UserService();

async function createUser(req, res) {
  try {
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
}

async function login(req, res) {
  try {
    const response = await userService.login(req.body.email, req.body.password);
    return res
      .cookie("access token", response.token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      })
      .status(201)
      .json({
        success: true,
        message: "successfully logged in",
        err: {},
        data: {
          email: response.user.email,
          id: response.user.id,
        },
      });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: "cant log in",
      err: error,
    });
  }
}

const logout = async (req, res) => {
  try {
    console.log("inside logout");
    res
      .clearCookie("access token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({
        message: "deleted token",
      });
  } catch (error) {
    res.status(500).json({
      message: "couldn't delete the token",
    });
  }
};

module.exports = {
  createUser,
  login,
  logout,
};
