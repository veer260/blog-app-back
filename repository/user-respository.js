const { User } = require("../models/index");
class UserRepository {
  constructor() {}
  async create(data) {
    try {
      console.log("repo layer");
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

  async deleteUser(userId) {
    try {
      // console.log("inside repo", typeof postId);
      const response = await User.destroy({
        where: {
          id: [userId],
        },
      });
      return response;
    } catch (error) {
      console.log("wrong in repo layer");
      throw error;
    }
  }

  async getUser(userId) {
    try {
      // console.log("inside repo", typeof postId);
      const response = await User.findByPk(userId);
      return response;
    } catch (error) {
      console.log("wrong in repo layer");
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
    } catch (error) {
      throw error;
    }
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
        throw {
          error: "User hasn't registered yet!",
        };
      } else {
        return user;
      }
    } catch (error) {
      throw {
        error: "somethings wrong in repo layer",
      };
    }
  }
}

module.exports = UserRepository;
