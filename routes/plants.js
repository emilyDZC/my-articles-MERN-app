const express = require("express");
const router = express.Router();
const {
  getPlants,
  addPlant,
  deletePlant,
  updatePlant,
} = require("../controllers/plantsController");

router.route("/").get(getPlants).post(addPlant);

router.route("/:id").patch(updatePlant).delete(deletePlant);

module.exports = router;
