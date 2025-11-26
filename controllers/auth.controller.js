import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return next(errorHandler(400, "User already exists"));

    const hashed = bcrypt.hashSync(password, 10);

    const user = new User({ username, email, password: hashed });
    await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (err) { next(err); }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(errorHandler(404, "User not found"));

    const check = bcrypt.compareSync(req.body.password, user.password);
    if (!check) return next(errorHandler(400, "Wrong password"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ message: "Login success", token, user });
  } catch (err) { next(err); }
};
