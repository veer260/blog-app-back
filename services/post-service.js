const PostRepository = require("../repository/post-repository");
class PostService {
  constructor() {
    this.postRepository = new PostRepository();
  }
  async createPost(data) {
    try {
      const post = await this.postRepository.create(data);
      return post;
    } catch (error) {
      console.log("error inside service layer");
      throw error;
    }
  }

  // async getAllPosts() {
  //   try {
  //     const posts =
  //   } catch (error) {

  //   }
  // }

  async getPostById(id) {
    try {
      const post = this.postRepository.postById(+id);
      return post;
    } catch (error) {
      console.log("wrong in service layer");
    }
  }

  async getPosts(cat) {
    try {
      const posts = await this.postRepository.getPosts(cat);
      return posts;
    } catch (error) {
      console.log("err", error);
      throw error;
    }
  }

  async deletePost(id) {
    try {
      console.log("inside service");
      const response = await this.postRepository.deletePost(id);
      return response;
    } catch (error) {
      console.log("wrong in service layer");
      throw error;
    }
  }
}

module.exports = PostService;
