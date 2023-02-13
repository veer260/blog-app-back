const express = require("express");
const router = express.Router();
const AuthRoute = require("./Auth/Auth");
const PostRouter = require("./Posts/posts");
const upload = require("../middlewares/multer-middle");

router.use("/auth/", AuthRoute);
router.use("/posts", PostRouter);
router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json({
    message: "uploaded the image",
    file: file,
  });
});

module.exports = router;
