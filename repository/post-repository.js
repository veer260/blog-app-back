const { Posts } = require("../models/index");
const posts = require("../models/posts");
class PostRepository {
  async create(data) {
    try {
      const post = await Posts.create(data);
      return post;
    } catch (error) {
      console.log("err:", error);
      throw error;
    }
  }

  async getPosts(cat) {
    try {
      console.log("cat:", cat);
      const posts = !cat
        ? await Posts.findAll()
        : await Posts.findAll({
            where: {
              category: cat,
            },
          });
      console.log("posts:", posts.length);
      // const posts = await Posts.findAll({
      //   where: {
      //     category: cat,
      //   },
      // });
      return posts;
    } catch (error) {
      console.log("something wrong in the repo layer");
      throw error;
    }
  }

  async postById(id) {
    try {
      const post = await Posts.findByPk(id);
      return post;
    } catch (error) {
      console.log("somethings wrong in repo layer");
      throw error;
    }
  }

  async deletePost(postId) {
    try {
      console.log("inside repo", typeof postId);
      const response = await Posts.destroy({
        where: {
          id: [postId],
        },
      });
      return response;
    } catch (error) {
      console.log("wrong in repo layer");
      throw error;
    }
  }
}

module.exports = PostRepository;
