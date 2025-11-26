import Employee from "../models/employee.model.js";
import User from "../models/user.model.js";
import Task from "../models/task.model.js";
import { errorHandler } from "../utils/error.js";

export const createEmployee = async (req, res, next) => {
  try {
    const { name, position, userId } = req.body;

    const userExists = await User.findById(userId);
    if (!userExists) return next(errorHandler(404, "User does not exist"));

    const emp = new Employee({ name, position, user: userId });
    await emp.save();

    res.status(201).json(emp);
  } catch (err) { next(err); }
};

export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().populate("user");
    res.json(employees);
  } catch (err) { next(err); }
};


// UPDATE EMPLOYEE
export const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updated = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updated) return next(errorHandler(404, "Employee not found"));

    res.json({
      msg: "Employee updated",
      employee: updated
    });
  } catch (err) {
    next(err);
  }
};

// DELETE EMPLOYEE
export const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;

    const emp = await Employee.findById(id);
    if (!emp) return next(errorHandler(404, "Employee not found"));

    // remove tasks linked to this employee
    await Task.deleteMany({ employee: id });

    await Employee.findByIdAndDelete(id);

    res.json({ msg: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};