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
}

module.exports = UserRepository;
