const express = require("express");
const router = express.Router();
const {
  getBirdSightings,
  updateBirdSighting,
  deleteBirdSighting,
  addBirdSighting,
  getAllBirdSightings,
} = require("../controllers/birdSightingsController");

router.route("/").get(getAllBirdSightings).post(addBirdSighting);
router.route("/:id").patch(updateBirdSighting).delete(deleteBirdSighting);
router.route("/bird/:birdId").get(getBirdSightings);

module.exports = router;
