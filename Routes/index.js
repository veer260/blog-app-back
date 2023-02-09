const express = require("express");
const router = express.Router();
const AuthRoute = require("./Auth/Auth");

router.use("/auth/", AuthRoute);

module.exports = router;
