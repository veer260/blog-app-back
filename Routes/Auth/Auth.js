const express = require("express");
const router = express.Router();
const {
  createUser,
  login,
  logout,
  deleteUser,
  getUser,
} = require("../../controllers/auth-controllers");

router.post("/register", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
