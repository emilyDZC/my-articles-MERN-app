const express = require("express");
const router = express.Router();
const {
  getMusicEntries,
  addMusicEntry,
  deleteMusicEntry,
  updateMusicEntry,
} = require("../controllers/musicEntriesController");

router.route("/").get(getMusicEntries).post(addMusicEntry);

router.route("/:id").patch(updateMusicEntry).delete(deleteMusicEntry);

module.exports = router;
