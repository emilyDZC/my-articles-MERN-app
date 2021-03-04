const express = require("express");
const router = express.Router();
const {
  getGardenTodos,
  addGardenTodo,
  deleteGardenTodo,
  updateGardenTodo,
} = require("../controllers/gardenTodosController");

router.route("/").get(getGardenTodos).post(addGardenTodo);

router.route("/:id").patch(updateGardenTodo).delete(deleteGardenTodo);

module.exports = router;
