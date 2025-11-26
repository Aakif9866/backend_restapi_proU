import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);     // UPDATE
router.delete("/:id", deleteTask);  // DELETE

export default router;