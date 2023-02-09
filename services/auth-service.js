const UserRepository = require("../repository/user-respository");
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
