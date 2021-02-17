const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  deletePost,
  updatePost,
} = require("../controllers/postsController");

router.route("/").get(getPosts).post(addPost);

router.route("/:id").patch(updatePost).delete(deletePost);

module.exports = router;
