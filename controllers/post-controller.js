const { useParams } = require("react-router");
const PostService = require("../services/post-service");
const postService = new PostService();
async function getPosts(req, res) {
  try {
    const query = req.query.cat;
    const response = await postService.getPosts(query);
    return res.status(200).json({
      message: "inside getposts",
      success: true,
      error: {},
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      data: {},
      message: "couldn't fetch posts",
    });
  }
}

async function getPost(req, res) {
  try {
    const response = await postService.getPostById(req.params.id);
    return res.status(200).json({
      message: "got post",
      success: true,
      error: {},
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
      data: {},
      message: "couldn'y fetch post",
    });
  }
}

async function addPost(req, res) {
  try {
    const response = await postService.createPost(req.body);
    return res.status(200).json({
      success: true,
      message: "successfully craeted new post ",
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "couldn't create  a post ",
      err: error,
      data: {},
    });
  }
}

async function deletePost(req, res) {
  const id = +req.params.id;
  try {
    await postService.deletePost(id);
    res.status(200).json({
      success: true,
      message: "deleted the city",
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unable to delete the post",
      err: error,
    });
  }
}

async function updatePost(req, res) {
  try {
  } catch (error) {}
}

module.exports = {
  getPost,
  getPosts,
  addPost,
  deletePost,
  updatePost,
};
