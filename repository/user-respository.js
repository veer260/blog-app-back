const { User } = require("../models/index");
class UserRepository {
  constructor() {}
  async create(data) {
    try {
      const existingUser = await this.checkExisting(data);
      if (existingUser) {
        throw {
          error: "user already existing",
        };
      }
      const response = await User.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async checkExisting(data) {
    try {
      const existingUser = await User.findOne({
        where: {
          email: data.email,
        },
      });
      return existingUser;
    } catch (error) {}
  }

  async getByEmail(dataEmail) {
    try {
      // console.log("inside repo layer");
      const user = await User.findOne({
        where: {
          email: dataEmail,
        },
      });
      // console.log("user:", user);
      if (!user) {
        // console.log("inside if");
        throw {
          error: "User hasn't registered yet!",
        };
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
