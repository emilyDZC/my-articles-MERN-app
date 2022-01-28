const express = require("express");
const router = express.Router();
const {
  getTeachings,
  addTeaching,
  deleteTeaching,
  updateTeaching,
} = require("../controllers/teachingsController");

router.route("/").get(getTeachings).post(addTeaching);

router.route("/:id").patch(updateTeaching).delete(deleteTeaching);

module.exports = router;
