const UserRepository = require("../repository/user-respository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    console.log("token created");
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  checkPassword(plainPassword, encryptedPassword) {
    try {
      const ans = bcrypt.compareSync(plainPassword, encryptedPassword);
      return ans;
    } catch (error) {
      throw {
        err: "password not matched",
      };
    }
  }

  createToken(user) {
    const token = jwt.sign(user, JWT_KEY, { expiresIn: "2h" });
    return token;
  }

  async login(email, plainPassword) {
    try {
      const user = await this.userRepository.getByEmail(email);
      const matched = this.checkPassword(plainPassword, user.password);
      if (!matched) {
        throw {
          err: "password is wrong",
        };
      }
      const token = this.createToken({
        email: email,
      });
      return { token, user };
    } catch (error) {
      console.log("inside error", error);
      throw error;
    }
  }
}

module.exports = UserService;
