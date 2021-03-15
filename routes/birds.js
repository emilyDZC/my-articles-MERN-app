const express = require("express");
const router = express.Router();
const {
  getBirds,
  addBird,
  deleteBird,
  updateBird,
} = require("../controllers/birdsController");

router.route("/").get(getBirds).post(addBird);

router.route("/:id").patch(updateBird).delete(deleteBird);

module.exports = router;
