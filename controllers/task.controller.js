import Task from "../models/task.model.js";
import Employee from "../models/employee.model.js";
import { errorHandler } from "../utils/error.js";

export const createTask = async (req, res, next) => {
  try {
    const { title, description, employeeId } = req.body;

    const emp = await Employee.findById(employeeId);
    if (!emp) return next(errorHandler(404, "Employee not found"));

    const task = new Task({ title, description, employee: employeeId });
    await task.save();

    res.status(201).json(task);
  } catch (err) { next(err); }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().populate("employee");
    res.json(tasks);
  } catch (err) { next(err); }
};

// UPDATE TASK
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) return next(errorHandler(404, "Task not found"));

    res.json({
      msg: "Task updated",
      task: updated
    });
  } catch (err) {
    next(err);
  }
};

// DELETE TASK
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) return next(errorHandler(404, "Task not found"));

    await Task.findByIdAndDelete(id);

    res.json({ msg: "Task deleted" });
  } catch (err) {
    next(err);
  }
};