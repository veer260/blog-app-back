const express = require("express");
const router = express.Router();
const {
  getPost,
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../../controllers/post-controller");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;
