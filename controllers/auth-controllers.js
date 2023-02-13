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

async function getUser(req, res) {
  try {
    const response = await userService.getUser(req.params.id);
    res.status(200).json({
      success: true,
      message: "fetched the user",
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
    return res.status(201).json({
      success: true,
      message: "successfully logged in",
      err: {},
      data: {
        email: response.user.email,
        id: response.user.id,
        username: response.user.username,
        token: response.token,
      },
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      success: false,
      message: error,
      err: error,
    });
  }
}

async function deleteUser(req, res) {
  const id = +req.params.id;
  try {
    await userService.deleteUser(id);
    // console.log("response", response);
    res.status(200).json({
      success: true,
      message: "deleted the user",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unable to delete the user",
      err: error,
    });
  }
}

const logout = async (req, res) => {
  try {
    console.log("inside logout");
    res.status(200).json({
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
  deleteUser,
  getUser,
};
