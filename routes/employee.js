import express from "express";
import {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/", createEmployee);
router.get("/", getEmployees);
router.put("/:id", updateEmployee);     // UPDATE
router.delete("/:id", deleteEmployee);  // DELETE

export default router;
