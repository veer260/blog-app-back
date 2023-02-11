const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_SYNC: process.env.DB_SYNC,
  SALT: bcrypt.genSaltSync(4),
  JWT_KEY: process.env.JWT_KEY,
};
